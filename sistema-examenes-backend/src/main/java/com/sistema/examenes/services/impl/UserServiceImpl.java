package com.sistema.examenes.services.impl;

import com.sistema.examenes.services.entities.User;
import com.sistema.examenes.services.entities.UserRole;
import com.sistema.examenes.exceptions.UserFoundEcxeption;
import com.sistema.examenes.repositories.RoleRepository;
import com.sistema.examenes.repositories.UserRepository;
import com.sistema.examenes.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Set;

/**
 * Implementacion de la interface UserService
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;


    /**
     * 1. Se busca que el usuario que desea guardar no exista
     * 2. si no existe,recorre los roles ingresados y los guarda
     * 3. Le asigna esos roles a ese usuario
     * 4. Guarda el usuario
     * @param user que se desea guardar
     * @param userRoleSet Lista de roles del usuario, con la tabla normalizada de muchos a muchos
     * @return El usuario Guardaro
     * @throws Exception en caso de que el usuario ya exista
     */
    @Override
    public User saveUser(User user, Set<UserRole> userRoleSet) throws Exception {
    User localUser = userRepository.findByUsername(user.getUsername());

    if(localUser != null){
        System.out.println("El usuario ya existe");
        throw new UserFoundEcxeption("El usuario ya esta presente");
    }else{
        for(UserRole userRole:userRoleSet){
            roleRepository.save(userRole.getRole());
        }
        user.getUserRoles().addAll(userRoleSet);
        localUser = userRepository.save(user);
    }
        return localUser;
    }

    @Override
    public User getUser(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
}
