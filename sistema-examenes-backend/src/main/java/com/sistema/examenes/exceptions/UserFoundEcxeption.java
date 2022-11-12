package com.sistema.examenes.exceptions;

public class UserFoundEcxeption extends Exception{

    public UserFoundEcxeption(){
    super("El usuario con ese username ya existe en la base de datos, vuelva a intentar");
    }

    public UserFoundEcxeption(String message){
        super(message);
    }
}
