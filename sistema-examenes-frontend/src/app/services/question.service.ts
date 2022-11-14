import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public listQuestionOfExam(examId:any){
    return this.http.get(`${baseUrl}pregunta/examen${examId}`);
  }
}