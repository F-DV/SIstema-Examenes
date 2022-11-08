import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user:User = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  }
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

/**
 * Enviar formulario
 * @returns
 */
  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      alert('el nombre de usuario es requerido');
      return;
    }
    this.userService.addUsuario(this.user)
    .subscribe(data => {
      console.log(data);
      alert("usuario guardado con exito");
    },(error)=> {
      console.log(error);
      alert('Ha ocurrido un error al tratar de agregar al usuario');
    })
  }

}
