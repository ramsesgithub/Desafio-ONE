const botonEncriptar=document.getElementById("encriptar");
const botonDesencriptar=document.getElementById("desencriptar");    
const botonCopiar=document.getElementById("copiar");    
const caracteresValidos = /^[a-zñ\s\¿\?\¡\!\,\.]+$/;

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", copiar);



function encriptar() {
    let texto=document.getElementById("textoEncriptar").value;
    if(caracteresValidos.test(texto)){
        let encriptado=texto.replace(/e/mg, "enter");
        encriptado=encriptado.replace(/o/mg, "ober");
        encriptado=encriptado.replace(/i/mg, "imes");
        encriptado=encriptado.replace(/a/mg, "ai");
        encriptado=encriptado.replace(/u/mg, "ufat");
        document.getElementById('textoDesencriptado').innerHTML=encriptado
        mostrar();
    }else{
        alert("Recuerda, Sólo letras Minúsculas y sin acentos.");
    }
}


function desencriptar(){
    let texto=document.getElementById("textoEncriptar").value;
    if(caracteresValidos.test(texto)){
        let encriptado=texto.replace(/enter/mg, "e");
        encriptado=encriptado.replace(/ober/mg, "o");
        encriptado=encriptado.replace(/imes/mg, "i");
        encriptado=encriptado.replace(/ai/mg, "a");
        encriptado=encriptado.replace(/ufat/mg, "u");
        document.getElementById('textoDesencriptado').innerHTML=encriptado;
        mostrar();
    }else{
        alert("Recuerda, Sólo letras Minúsculas y sin acentos.");
    }
}



function copiar(){
    let copiado = document.createElement("input");
    copiado.setAttribute("value", document.getElementById("textoDesencriptado").innerHTML);
    document.body.appendChild(copiado);
    copiado.select();
    document.execCommand("copy");
    document.body.removeChild(copiado);
}


function mostrar(){
    let x = document.getElementById('textoDesencriptado');
    let c= document.getElementById("copiar");
    if(document.getElementById("textoEncriptar").value!==""){
        x.style.display = 'block';
        c.style.display = 'block';
        document.getElementById("textoEncriptar").value = "";
    }else{
        x.style.display = 'none';
        c.style.display = 'none';
    }
}

