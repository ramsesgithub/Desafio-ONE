const botonEncriptar=document.getElementById("encriptar");
const botonDesencriptar=document.getElementById("desencriptar");    
const botonCopiar=document.getElementById("copiar");    



botonEncriptar.addEventListener("click", myFunctionEncriptar);

botonDesencriptar.addEventListener("click", myFunctionDesencriptar);

botonCopiar.addEventListener("click", copiar);

// function encriptar(){
//     let texto=document.getElementById("textoEncriptar").value.toLowerCase();

//     let encriptado=texto.replace(/e/mg, "enter");
//     encriptado=encriptado.replace(/o/mg, "ober");
//     encriptado=encriptado.replace(/i/mg, "imes");
//     encriptado=encriptado.replace(/a/mg, "ai");
//     encriptado=encriptado.replace(/u/mg, "ufat");
    
//     document.getElementById('textoDesencriptado').innerHTML=encriptado;
// }

// function desencriptar(){
//     let texto=document.getElementById("textoEncriptar").value.toLowerCase();
//     let encriptado=texto.replace(/enter/mg, "e");
//     encriptado=encriptado.replace(/ober/mg, "o");
//     encriptado=encriptado.replace(/imes/mg, "i");
//     encriptado=encriptado.replace(/ai/mg, "a");
//     encriptado=encriptado.replace(/ufat/mg, "u");
    
//     document.getElementById('textoDesencriptado').innerHTML=encriptado;
// }




function myFunctionEncriptar() {
    let texto=document.getElementById("textoEncriptar").value.toLowerCase();
    let encriptado=texto.replace(/e/mg, "enter");
    encriptado=encriptado.replace(/o/mg, "ober");
    encriptado=encriptado.replace(/i/mg, "imes");
    encriptado=encriptado.replace(/a/mg, "ai");
    encriptado=encriptado.replace(/u/mg, "ufat");
    
    document.getElementById('textoDesencriptado').innerHTML=encriptado;

    let x = document.getElementById('textoDesencriptado');
    let c= document.getElementById("copiar");

    if(document.getElementById("textoEncriptar").value!==""){
        x.style.display = 'block';
        c.style.display = 'block';
    }else{
        x.style.display = 'none';
        c.style.display = 'none';
    }
}

function myFunctionDesencriptar(){
    let texto=document.getElementById("textoEncriptar").value.toLowerCase();
    let encriptado=texto.replace(/enter/mg, "e");
    encriptado=encriptado.replace(/ober/mg, "o");
    encriptado=encriptado.replace(/imes/mg, "i");
    encriptado=encriptado.replace(/ai/mg, "a");
    encriptado=encriptado.replace(/ufat/mg, "u");
    
    document.getElementById('textoDesencriptado').innerHTML=encriptado;

    let x = document.getElementById('textoDesencriptado');
    let c= document.getElementById("copiar");
    if(document.getElementById("textoEncriptar").value!==""){
        x.style.display = 'block';
        c.style.display = 'block';
    }else{
        x.style.display = 'none';
        c.style.display = 'none';
    }
}



function copiar(){
    let copiado = document.createElement("input");
    copiado.setAttribute("value", document.getElementById("textoDesencriptado").innerHTML);
    document.body.appendChild(copiado);
    copiado.select();
    document.execCommand("copy");
}