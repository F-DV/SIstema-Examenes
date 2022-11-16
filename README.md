#Administrador de Examenes

##Descripcion del proyecto
Sistema de administración de exámenes con registro de usuario, inicio de session con rol de administrador o usuario con JWT y spring Security.
###El rol de  administrador permite: 
ver perfil del administrador, agregar categorías, ver categorías, agregar exámenes, actualizar exámenes, eliminar exámenes, modificar exámenes, activar o desactivar examenes, agregar preguntas a los exámenes, darle una categoría a los exámenes,
eliminar pregunta, actualizar pregunta.
###El rol de usuario permite:
Ver exámenes disponibles, ver exámenes por categoría, realizar exámenes, enviar el cuestionario.  

##Backend
- Java 11
- SpringBoot
- Mysql
- Dependencias:Spring web, spring Data JPA, MysqlDriver, Validation,spring Security, JWT, Jaxb.

##FrontEnd
- Angular 
- Typescript
- Html
- Css
- Dependencias: AngularMaterials, sweetalert2, bootstrap.

##Seguridad
- Spring Security
- JWT