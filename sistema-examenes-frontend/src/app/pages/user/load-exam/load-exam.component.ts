import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-load-exam',
  templateUrl: './load-exam.component.html',
  styleUrls: ['./load-exam.component.css']
})
export class LoadExamComponent implements OnInit {

  catId:any;
  exams:any;

  constructor(
    private route:ActivatedRoute,
    private examService:ExamService
  ) { }

  ngOnInit(): void {
    this.catId = this.route.snapshot.params['catId'];
    if(this.catId == 0){
      console.log('Cargando todos los exámenes');
      this.examService.listExams().subscribe(
        (data) => {
            this.exams = data;
            console.log(this.exams);
        },
        (error) =>{
          console.log(error);
        }
      )
    }
    else{
      console.log('Cargando un exámen en especifico');
      this.exams = [];
    }
  }

}
