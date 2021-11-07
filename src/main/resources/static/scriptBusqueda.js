window.onload = iniciar();


function iniciar(){
    document.getElementById("btnBuscar").addEventListener("click",obtenerUsuarioPorMail);
}


async function obtenerUsuarioPorMail() {
    let cedula=document.getElementById("cedula").value;
let dc=cedula[cedula.length-1];
let dcVerificado=validarCi(cedula);
    if(dcVerificado!=dc){
        alert("El dígito de control para la cédula ingresada no verifica");
        return;
    }else{



        const response = await fetch('api/obtenerUsuario/'+cedula, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const usuario = await response.json();
        if (usuario.cedula==="-"){
            alert("Usuario no encontrado");
            return;
        }
        console.log(usuario);



            let usuarioHTML =  "<tr><td>"+usuario.id+"</td><td>"+usuario.cedula+"</td><td>"+usuario.nombre+"</td><td>"+usuario.apellido+"</td><td>"+usuario.email+"</td><td>"+usuario.celular+"</td></tr>"

        document.querySelector('#tablaUsuarios tbody').innerHTML=usuarioHTML;


    }
}

function validarCi(ci){
    var a = 0;
    var i = 0;
    if(ci.length <= 6){
        for(i = ci.length; i < 7; i++){
            ci = '0' + ci;
        }
    }
    for(i = 0; i < 7; i++){
        a += (parseInt("2987634"[i]) * parseInt(ci[i])) % 10;
    }
    if(a%10 === 0){
        return 0;
    }else{
        return 10 - a % 10;
    }
}