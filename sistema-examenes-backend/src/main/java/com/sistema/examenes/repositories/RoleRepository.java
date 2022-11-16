package com.sistema.examenes.repositories;

import com.sistema.examenes.services.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role,Long> {

}
