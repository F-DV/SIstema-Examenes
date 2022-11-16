import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  examId:any;
  questions:any;
  pointsAchieved = 0;
  correctAnswers = 0;
  attempts = 0;
  isSend = false;
  timer:any;

  constructor(
    private locationSt:LocationStrategy,
    private route:ActivatedRoute,
    private questionService:QuestionService
  ) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.examId = this.route.snapshot.params['examId'];
    console.log(this.examId);
    this.loadQuestions();
  }

  loadQuestions(){
    this.questionService.listQuestionsOfExamnToTest(this.examId).subscribe(
      (data:any)=> {
        console.log(data);
        this.questions = data;

        this.timer = this.questions.length * 2 * 60;

        this.questions.forEach((p:any) => {
          p['answerGiven'] = '';
        })
        console.log(this.questions);
        this.startTimer();
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error','Error al cargar las preguntas del examen','error');
      }
    )
  }

  preventBackButton(){
    history.pushState(null,null!,location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null,null!,location.href);
    })
  }

  sendExam(){
    Swal.fire({
      title:'¿Quieres enviar el examen?',
      icon:'info',
      confirmButtonText:'Enviar',
      cancelButtonText:'Cancelar'
    }).then((result) =>{
      if(result.isConfirmed){
        this.evaluateExam();
      }
    })

  }

  startTimer(){
    let t = window.setInterval(() => {
      if(this.timer <=0 ){
        this.evaluateExam();
        clearInterval(t);
      }else{
        this.timer--;
      }
    },1000)
  }

  getFormatHour(){
    let mm = Math.floor(this.timer/60);
    let ss = this.timer - mm*60;
    return `${mm} : min : ${ss} seg`;
  }

  evaluateExam(){
    this.questionService.evaluateExam(this.questions).subscribe(
      (data:any) =>{
        this.attempts = data.max_points;
        this.correctAnswers = data.correctAnswers;
        this.attempts = data.attempts;
        this.isSend = true;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  printPage(){
    window.print();
  }
}
