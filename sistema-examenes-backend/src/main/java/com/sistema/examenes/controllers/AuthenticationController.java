package com.sistema.examenes.controllers;

import com.sistema.examenes.config.JwtUtils;
import com.sistema.examenes.entities.User;
import com.sistema.examenes.exceptions.UserNotFoundException;
import com.sistema.examenes.security.JwtRequest;
import com.sistema.examenes.security.JwtResponse;
import com.sistema.examenes.services.impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin("*")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/generate-token")
    public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception{

        try{
            authenticate(jwtRequest.getUsername(),jwtRequest.getPassword());
        }catch (UserNotFoundException e) {
            e.printStackTrace();
            throw  new Exception("USUARIO NO ENCONTRADO");
        }
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(jwtRequest.getUsername());
        String token = this.jwtUtils.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponse(token));
    }

    //Obtener el usuario actual
    @GetMapping("/actual-user")
    public User getActualUser(Principal principal){
        return (User) this.userDetailsService.loadUserByUsername(principal.getName());
    }

    private void authenticate(String username,String password) throws Exception{
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
        }catch (DisabledException disabledException){
            throw new Exception("USUARIO DESABILITADO" + disabledException.getMessage());

        }catch(BadCredentialsException badCredentialsException){
            throw new Exception("CREDENCIALES INVALIDAD" + badCredentialsException.getMessage());
        }
    }
}
