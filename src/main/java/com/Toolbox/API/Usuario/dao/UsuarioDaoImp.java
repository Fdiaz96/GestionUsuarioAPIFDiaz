package com.Toolbox.API.Usuario.dao;

import com.Toolbox.API.Usuario.models.Usuario;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class UsuarioDaoImp implements UsuarioDao{

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Usuario> obtenerListaUsuarios() {
       String query = "FROM Usuario";
      return entityManager.createQuery(query).getResultList();

    }

    @Override
    public Usuario getUsuarioPorCI(String cedula) {
        String query = "FROM Usuario WHERE cedula = :cedula";
        List<Usuario> lista = entityManager.createQuery(query)
                 .setParameter("cedula", cedula)
                .getResultList();
        if (lista.isEmpty()) {
            Usuario usuario = new Usuario();
            usuario.setCedula("-");
            return usuario;
        }

            return lista.get(0);

    }

    @Override
    public void eliminar(int id) {
        Usuario usuario = entityManager.find(Usuario.class, id);
        entityManager.remove(usuario);
    }

    @Override
    public void registrar(Usuario usuario) {
        entityManager.merge(usuario);
    }
}
