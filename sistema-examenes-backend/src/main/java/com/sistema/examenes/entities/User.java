package com.sistema.examenes.entities;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * Tabla de usuarios
 */
@Entity
@Table(name = "usuarios")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Auto-incremen cuando cree nuevo registro
    private Long id;

    private String username;
    private String password;
    private String name;
    private String lastName;
    private String email;
    private String phone;
    private Boolean enable = true; // para saber si el usuario esta habilitado para hacer examenes
    private String profile;

    /**
     * - CascadeType.ALL: Propaga todas las operaciones de una entidad, a la entidad con la que se relaciona.
     * - FetchType.EAGER: Lista todos lo registros relacionados al usuario
     * - mappedBy: Apunta a la entidad propietaria de la relacion
     */
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,mappedBy = "user")
    private Set<UserRole> userRoles = new HashSet<>();

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Boolean getEnable() {
        return enable;
    }

    public void setEnable(Boolean enable) {
        this.enable = enable;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public Set<UserRole> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(Set<UserRole> userRoles) {
        this.userRoles = userRoles;
    }
}
