package com.sistema.examenes.repositories;

import com.sistema.examenes.services.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

    /**
     * findByUsername utilizando JpaRepository, crea una implementacion
     * automaticamente usando el estadar con el que se nombra este metodo
     * @param username Usuario que desea guardar
     * @return  Usuario guardado
     */
    public User findByUsername(String username);
}
