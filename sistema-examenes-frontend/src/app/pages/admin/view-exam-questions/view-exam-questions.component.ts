import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

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
    private questionService:QuestionService) { }

  ngOnInit(): void {
    this.examId = this.route.snapshot.params['examId'];
    this.title = this.route.snapshot.params['title'];
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

}
