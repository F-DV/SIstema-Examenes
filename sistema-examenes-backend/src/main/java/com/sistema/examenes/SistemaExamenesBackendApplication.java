package com.sistema.examenes;

<<<<<<< HEAD
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SistemaExamenesBackendApplication {
=======
import com.sistema.examenes.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class SistemaExamenesBackendApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
>>>>>>> dev1

	public static void main(String[] args) {
		SpringApplication.run(SistemaExamenesBackendApplication.class, args);
	}

<<<<<<< HEAD
=======
	@Override
	public void run(String... args) throws Exception {
/*
		//Registramos el primer usuario como Administrador
		try {
			User user = new User();
			user.setName("Felipe");
			user.setLastName("Quiceno");
			user.setUsername("pipe");
			user.setPassword(passwordEncoder.encode("1234"));
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
			User savedUser = userService.saveUser(user, userRoleSet);
			System.out.println(savedUser.getName());

		} catch (UserFoundEcxeption e) {
			e.printStackTrace();

		}

 */
	}


>>>>>>> dev1
}
