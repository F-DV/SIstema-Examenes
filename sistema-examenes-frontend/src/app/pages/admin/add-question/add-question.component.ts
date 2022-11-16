import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  examId:any;
  title:any;
  question:any = {
    exam: {},
    content: '',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  }

  constructor(
    private route:ActivatedRoute,
    private questionService:QuestionService,
    private snack:MatSnackBar
    ) { }

  ngOnInit(): void {
    this.examId = this.route.snapshot.params['examId'];
    this.title = this.route.snapshot.params['title'];
    this.question.exam['examId'] = this.examId;

  }

  formSubmit(){
    if(this.question.content.trim() == '' || this.question.content == null){
      return;
    }
    if(this.question.option1.trim() == '' || this.question.option1 == null){
      return;
    }
    if(this.question.option2.trim() == '' || this.question.option2 == null){
      return;
    }
    if(this.question.option3.trim() == '' || this.question.option3 == null){
      return;
    }
    if(this.question.option4.trim() == '' || this.question.option4 == null){
      return;
    }
    if(this.question.answer.trim() == '' || this.question.answer == null){
      return;
    }
    this.questionService.saveQuestion(this.question).subscribe(
      (data) => {
        this.question = data;
        Swal.fire('Pregunta guardada','La oregunta ha sido guardada con éxito','success');
        this.question.content = '';
        this.question.option1 = '';
        this.question.option2 = '';
        this.question.option3 = '';
        this.question.option4 = '';
        this.question.answer = '';
      },
      (error) =>{
        Swal.fire('Error','Error al guardar la pregunta en la base de datos','error');
        console.log(error);
      }
    )
  }

}
