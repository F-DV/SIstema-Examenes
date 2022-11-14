import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {

  categories:any = [];

  examData = {
    title:'',
    description:'',
    max_points:'',
    question_number:'',
    active:true,
    category:{
      categoryId:''
    }
  }

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.listCategories().subscribe(
      (data:any)=>{
        this.categories = data;
        console.log(this.categories);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error al cargar los datos','error');
      }
    )
  }

}
