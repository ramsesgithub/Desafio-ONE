const botonEncriptar=document.getElementById("encriptar");
const botonDesencriptar=document.getElementById("desencriptar");    
const botonCopiar=document.getElementById("copiar");    

const caracteresValidos = /^[a-zñ\s\¿\?\¡\!\,\.]+$/;

botonEncriptar.addEventListener("click", myFunctionEncriptar);
botonDesencriptar.addEventListener("click", myFunctionDesencriptar);
botonCopiar.addEventListener("click", copiar);



function myFunctionEncriptar() {
    let texto=document.getElementById("textoEncriptar").value;
    if(caracteresValidos.test(texto)){
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
    }else{
        alert("El texto no es valido, escribir en minusculas, sin acentos y sin números.");
    }
}




function myFunctionDesencriptar(){
    let texto=document.getElementById("textoEncriptar").value;
    if(caracteresValidos.test(texto)){
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
    }else{
        alert("El texto no es valido, escribir en minusculas, sin acentos y sin números.");
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