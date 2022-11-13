package com.sistema.examenes.security;

import org.springframework.security.core.GrantedAuthority;

/**
 * Obtener las autoridades del usuario
 */
public class Authority implements GrantedAuthority {

    private String authority;

    public Authority(String authority) {
        this.authority = authority;
    }

    @Override
    public String getAuthority() {
        return this.authority;
    }
}
