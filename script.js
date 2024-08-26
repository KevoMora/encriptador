const input = document.querySelector(".input");
const output = document.querySelector(".output");
const botonCopiar =document.querySelector(".btnCopiar");
const muneco = document.querySelector(".muneco");
const info1 = document.querySelector(".info1");
const info2 = document.querySelector(".info2");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function botonEncriptar(){
    const textoEncriptado = encriptar(input.value);
    output.value = textoEncriptado;
    input.value = "";

    if (textoEncriptado === ""){
        muneco.style.display = "block";
        info1.style.display = "block";
        info2.style.display = "block";

        output.style.display = "none";
        botonCopiar.style.display = "none";

    } else {
        output.style.display = "block";
        botonCopiar.style.display = "block";

        muneco.style.display = "none";
        info1.style.display = "none";
        info2.style.display = "none";
    }
    
}
 

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(input.value);
    output.value = textoDesencriptado;
    input.value = "";

    if (textoDesencriptado === ""){
        muneco.style.display = "block";
        info1.style.display = "block";
        info2.style.display = "block";

        output.style.display = "none";
        botonCopiar.style.display = "none";

    } else {
        output.style.display = "block";
        botonCopiar.style.display = "block";

        muneco.style.display = "none";
        info1.style.display = "none";
        info2.style.display = "none";
    }
}

function desencriptar(stringDesencriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptar
}

document.querySelector(".btnCopiar").addEventListener("click", copiarAlPortapapeles);


function copiarAlPortapapeles() {
    navigator.clipboard.writeText(output.value).then(function() {
        alert("Texto copiado al portapapeles!");
    })
}
