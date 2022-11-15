import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-exam-questions',
  templateUrl: './view-exam-questions.component.html',
  styleUrls: ['./view-exam-questions.component.css']
})
export class ViewExamQuestionsComponent implements OnInit {

  examId:any;
  title:any;
  questions:any = [];

  constructor(
    private route:ActivatedRoute,
    private questionService:QuestionService,
    private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.examId = this.route.snapshot.params['examId'];
    this.title = this.route.snapshot.params['title'];
    console.log(this.title);

    this.questionService.listQuestionOfExam(this.examId).subscribe(
      (data) =>{
        console.log(data);
        this.questions = data;
      },
      (error) =>{
        console.log(error);
      }
    )
  }
  deleteQuestion(questionId:any){
    Swal.fire({
      title:'Eliminar pregunta',
      text:'Estás seguro, ¿quiere eliminar esta pregunta?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) =>{
      if(result.isConfirmed){
        this.questionService.deleteQuestion(questionId).subscribe(
          (data) => {
            this.snack.open('Pregunta eliminada','',{
              duration:3000
            })
            this.questions = this.questions.filter((question:any) => question.questionId != questionId);
          },
          (error) =>{
            this.snack.open('Error al eliminar la pregunta','',{duration:3000})
            console.log(error);
          }
        )
      }
    })
  }

}
