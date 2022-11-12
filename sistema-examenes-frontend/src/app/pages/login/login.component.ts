import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    "username" : "",
    "password" : ""
  }
  constructor(
    private snack:MatSnackBar,
    private loginService:LoginService) { }

  ngOnInit(): void {
  }

  formSubmit(){

    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null){
      this.snack.open('El nombre de usuario es requerido !!','Aceptar',{
        duration:3000
      })
      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this.snack.open('La contraseña es requerida !!','Aceptar',{
        duration:3000
      })
      return;
    }

    this.loginService.generateToken(this.loginData)
    .subscribe(
      (data:any) => {
        console.log(data);
        this.loginService.loginUser(data.token);

        this.loginService.getCurrentUser()
        .subscribe((user:any) => {
          this.loginService.setUser(user);
          console.log(user);

          if(this.loginService.getUserRole() == 'ADMIN'){
            //Mostramos dashboard Admin
            window.location.href = '/admin'
          }else if(this.loginService.getUserRole()== 'NORMAL'){
            //Mostramos el dashboard del user
            window.location.href = '/user'
          }else{
            this.loginService.logout();
          }
        })


      },(error) => {
        console.log("un error: ",error);
        this.snack.open('Detalles inválidos, vuelva a intentar !!', 'Aceptar',{
          duration: 3000
        });
      }
    )
  }



}
