window.onload = iniciar;

function iniciar(){
    document.getElementById("btnSubmit").addEventListener("click",clickSubmit)
}

async function clickSubmit(){
    let usuario={
        "cedula":document.getElementById("txtCedula").value,
        "nombre":document.getElementById("txtNombre").value,
        "apellido":document.getElementById("txtApellido").value,
        "email":document.getElementById("txtEmail").value,
        "celular":document.getElementById("txtCelular").value,

    }


 //validar que todos los campos estén llenos
    if(!validarCampos(usuario.cedula , usuario.nombre , usuario.apellido , usuario.email  , usuario.celular)){
     alert("Debe llenar todos los campos para continuar");
     return;
    }
 //validar DC CI:
if(!validarCi(usuario.cedula)==usuario.cedula[usuario.cedula.length-1]){
    alert("El dígito de control para la cédula ingresada no verifica");
    return;
}

//validar email
    if(!validarMail(usuario.email)){
        alert("Favor ingrese un mail correcto")
        return;
    }
//validar celular
    if(!validarCelular(usuario.celular)){
        alert("favor ingrese un celular válido")
        return;
    }


    const request = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    });
    alert("El usuario fue dado de alta con éxito!");
}

function validarCampos(cedula, nombre, apellido, email,celular){
    return !(cedula === "" || nombre === "" || apellido === "" || email === "" || celular === "");

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



function validarMail(email){

    let expresionRegular = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (expresionRegular.test(email)) {
       return true;
    } else {
       return false;
    }
}

function validarCelular(celular){
    if(celular.length!=9 || celular.substring(0, 2)!="09"|| isNaN(celular)){
        return false;
    }
    return true;
}