import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  //Generacion del token
  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}generate-token`,loginData);
  }

  //Inicio de session y se establece el token en localStorage por un tiempo
  public loginUser(token:any){

    localStorage.setItem('token',token);
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }
  //cerramos session y eliminamos el token en localStorage
  public logout(){

    //logica de iniciar para poder cerrar session
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //Obtenemos el token
  public getToken(){
    return localStorage.getItem('token');
  }

  //Guardar usuario en localStorage
  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  //Obtener usuario del localStorage
  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  //Obtenemos el role
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  //Obtener el usuario actual que inicia session
  public getCurrentUser(){
    return this.http.get(`${baseUrl}actual-user`);
  }



}
