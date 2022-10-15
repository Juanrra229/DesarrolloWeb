let nombres= document.getElementById("name");
let apellidos= document.getElementById("lastName");
let email= document.getElementById("Email");
let celular= document.getElementById("cellPhone");
let password= document.getElementById("password");
let error= document.getElementById("warnings");
let form= document.getElementById("formulario");

function validaEnvia(){
    console.log('Enviando formulario...')
    let mensajesError = [];
    let entrar= false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    error.innerHTML = "";
    //valido el nombre
    if (nombres.value === null || nombres.value === ''){
        mensajesError.push(`Debes ingresar los nombres <br>`);
        entrar= true;
    }

    if (apellidos.value === null || apellidos.value === ''){
        mensajesError.push(`Debes ingresar tus apellidos completos <br>`);
        entrar= true;
    }

    if (!regexEmail.test(email.value)){
        mensajesError.push(`Debes ingresar un Email <br>`);
        entrar= true;
    }

    if (celular.value === null || celular.value === ''){
        mensajesError.push(`Debes ingresar un numero celular <br>`);
        entrar= true;
    }

    if (password.value === null || password.value === ''){
        mensajesError.push(`Debes ingresar un passwaord <br>`);
        entrar= true;
    }
 
    if(entrar){
        error.style.color='red';
        error.innerHTML = mensajesError.join(', ');
        return false
    }
    else{
        error.style.color='green';
        error.innerHTML = "Enviado"; 
        return false
    }
}

