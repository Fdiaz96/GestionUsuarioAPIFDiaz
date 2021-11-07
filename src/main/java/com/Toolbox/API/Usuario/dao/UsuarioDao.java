package com.Toolbox.API.Usuario.dao;

import com.Toolbox.API.Usuario.models.Usuario;

import java.util.List;

public interface UsuarioDao {
    List<Usuario> obtenerListaUsuarios();

    Usuario getUsuarioPorCI(String cedula);

    void eliminar(int id);

    void registrar(Usuario usuario);
}
