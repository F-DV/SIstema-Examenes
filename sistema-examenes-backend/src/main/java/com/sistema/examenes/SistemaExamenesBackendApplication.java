package com.sistema.examenes;

import com.sistema.examenes.entities.Role;
import com.sistema.examenes.entities.User;
import com.sistema.examenes.entities.UserRole;
import com.sistema.examenes.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class SistemaExamenesBackendApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(SistemaExamenesBackendApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {
		/*
		//Se instancia el usuario
		User user = new User();
		user.setName("Felipe");
		user.setLastName("Quiceno");
		user.setUsername("pipe");
		user.setPassword("1234");
		user.setEmail("fqgomez@gmail.com");
		user.setPhone("1236542");
		user.setProfile("Foto.png");

		//Se instancia el Rol
		Role role = new Role();
		role.setRolId(1L);
		role.setNameRole("ADMIN");

		//Se crea la lista de Roles del usuario
		Set<UserRole> userRoleSet = new HashSet<>();

		//Se instancia la referencia de muchos a muchos
		UserRole userRole = new UserRole();

		userRole.setRole(role);
		userRole.setUser(user);
		userRoleSet.add(userRole);
		User savedUser = userService.saveUser(user,userRoleSet);
		System.out.println(savedUser.getName());
	*/
	}

}
