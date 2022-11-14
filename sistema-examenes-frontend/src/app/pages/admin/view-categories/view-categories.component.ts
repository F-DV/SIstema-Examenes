import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories = [
  {
    categoryId:1,
    title:'Lenguajes de programación',
    description:'Esta es una categoria de prueba'
  },
  {
    categoryId:1,
    title:'Lenguajes de programación',
    description:'Esta es una categoria de prueba'
  },
  {
    categoryId:1,
    title:'Lenguajes de programación',
    description:'Esta es una categoria de prueba'
  },
  {
    categoryId:1,
    title:'Lenguajes de programación',
    description:'Esta es una categoria de prueba'
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
