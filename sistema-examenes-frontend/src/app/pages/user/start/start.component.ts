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

}
