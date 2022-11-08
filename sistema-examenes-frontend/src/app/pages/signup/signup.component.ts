import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user:User = {
    username: '',
    password: '',
    name: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  }
  constructor(
    private userService:UserService,
    private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

/**
 * Enviar formulario
 * Nos suscribimos a los valores que nos devuelve el backend
 * @returns
 */
  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      this.snack.open('el nombre de usuario es requerido !!','Aceptar',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    this.userService.addUsuario(this.user)
    .subscribe(data => {
      console.log(data);
      Swal.fire('Usuario guardado','Usuario registrado con exito en el sistema','success');

    },(error)=> {
      console.log(error);
      this.snack.open('Ha ocurrido un error al tratar de agregar al usuario','Aceptar',{
        duration: 3000,
      });

    })
  }

}
