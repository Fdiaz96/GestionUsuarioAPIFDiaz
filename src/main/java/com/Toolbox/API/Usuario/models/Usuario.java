package com.Toolbox.API.Usuario.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="usuario")
public class Usuario {

    @Id
    @Column(name ="id")
    private int id;
    @Column(name ="cedula")
    private String cedula;
    @Column(name ="nombre")
    private String nombre;
    @Column(name ="apellido")
    private String apellido;
    @Column(name ="email")
    private String email;
    @Column(name = "celular")
    private String celular;

    public String getCelular() {return celular;}

    public void setCelular(String celular) {this.celular = celular;}

    public int getId() {return id;}

    public void setId(int id) {this.id = id;}

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
