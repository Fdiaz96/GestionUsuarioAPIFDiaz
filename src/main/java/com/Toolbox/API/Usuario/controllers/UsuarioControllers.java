package com.Toolbox.API.Usuario.controllers;

import com.Toolbox.API.Usuario.dao.UsuarioDao;
import com.Toolbox.API.Usuario.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UsuarioControllers {
@Autowired
private UsuarioDao usuarioDao;

    @RequestMapping(value = "api/obtenerUsuario/{cedula}", method = RequestMethod.GET)
    public Usuario obtenerUsuariosPorMail(@PathVariable String cedula) {

Usuario usuario= usuarioDao.getUsuarioPorCI(cedula);


return usuario;
    }
    @CrossOrigin(origins="https://gestion-de-usuarios.000webhostapp.com/")
@RequestMapping(value="api/obtenerListaUsuarios")
    public List<Usuario> obtenerListaUsuarios() {
        return usuarioDao.obtenerListaUsuarios();

    }
    @CrossOrigin(origins="https://gestion-de-usuarios.000webhostapp.com/")
    @RequestMapping(value = "api/usuarios/{id}", method = RequestMethod.DELETE)
    public void eliminar(@PathVariable int id) {

        usuarioDao.eliminar(id);

    }
    @CrossOrigin(origins="https://gestion-de-usuarios.000webhostapp.com/")
    @RequestMapping(value = "api/usuarios", method = RequestMethod.POST)
    public void registrarUsuario(@RequestBody Usuario usuario) {


        usuarioDao.registrar(usuario);
    }

}