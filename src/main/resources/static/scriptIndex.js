window.onload = iniciar();


async function iniciar() {
    const response = await fetch('https://rest-service-gestionusuarios.herokuapp.com/api/obtenerListaUsuarios', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

    });
    const usuarios = await response.json();
    let listadoHTML='';
    for(let usuario of usuarios){

        let botonEliminar = '<a href="#" onclick="eliminarUsuario(' + usuario.id + ')"><i class="material-icons btnEliminar">delete</i></a>';


        let usuarioHTML =  "<tr><td>"+usuario.id+"</td><td>"+usuario.cedula+"</td><td>"+usuario.nombre+"</td><td>"+usuario.apellido+"</td><td>"+usuario.email+"</td><td>"+usuario.celular+"</td><td>"+botonEliminar+"</td></tr>"
listadoHTML+=usuarioHTML;
    }
    document.querySelector('#tablaIndex tbody').innerHTML=listadoHTML;

    console.log(usuarios);
}

async function eliminarUsuario(id) {
if(id===1){
    alert("No es posible borrar al creador");
    return
}
    if (!confirm('¿Desea eliminar este usuario?')) {
        return;
    }

    const request = await fetch('https://rest-service-gestionusuarios.herokuapp.com/api/usuarios/' + id, {
        method: 'DELETE',
    });

    location.reload()
}