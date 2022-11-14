import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    ) { }

  ngOnInit(): void {
    this.examId = this.route.snapshot.params['examId'];
    this.title = this.route.snapshot.params['title'];
    this.question.exam['examId'] = this.examId;
  }

}
