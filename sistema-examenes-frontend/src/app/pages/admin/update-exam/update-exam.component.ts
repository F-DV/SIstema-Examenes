import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ExamService } from 'src/app/services/exam.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.css']
})
export class UpdateExamComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private examService:ExamService,
    private categoryService:CategoryService,
    private router:Router) { }

  examId = 0;
  exam:any;
  categories:any;

  ngOnInit(): void {
    this.examId = this.route.snapshot.params['examId'];

    //Obtenemos el examen
    this.examService.getExam(this.examId).subscribe(
      (data) => {
        this.exam = data;
        console.log(this.exam);
      },
      (error) =>{
        console.log(error);
      }
    )
    // Listamos las categorias
    this.categoryService.listCategories().subscribe(
      (data:any) => {
        this.categories = data;
      },
      (error) => {
        alert('Error al cargar las categorias');
      }
      )
  }

  public updateData(){
    this.examService.updateExam(this.exam).subscribe(
      (data) =>{
        Swal.fire('Examen actualizado','El examen ha sido actualizado con éxito','success')
        .then((e) => {
          this.router.navigate(['/admin/exams']);
        });
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar el examen','error');
        console.log(error);
      }
    )
  }
}
