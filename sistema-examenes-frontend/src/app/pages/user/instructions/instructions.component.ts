import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  examId:any;
  exam:any;

  constructor(
    private examService:ExamService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.examId = this.route.snapshot.params['examId'];
    this.examService.getExam(this.examId).subscribe(
      (data:any) =>{
        console.log(data);
        this.exam = data;
      },
      (error) =>{
        console.log(error);
      }
    )
  }
  startExam(){
    Swal.fire({
      title:'¿Quieres Comenzar el examen',
      showCancelButton:true,
      cancelButtonText:'Cancelar',
      confirmButtonText:'Empezar',
      icon:'info'
    }).then((result:any) =>{
      if(result.isConfirmed){
        this.router.navigate(['/start/'+this.examId]);
      }
    })
  }

}
