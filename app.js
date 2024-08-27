
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function encryptText(){
    let text_output="";
    let text1 = String(document.querySelector('#textoEntrada').value);
    for(let i=0;i<text1.length;i++){
        switch(text1[i]){
            case 'a':
                text_output+="ai"; break;
            case 'e':
                text_output+="enter"; break;
            case 'i':
                text_output+="imes"; break;
            case 'o':
                text_output+="ober"; break;
            case 'u':
                text_output+="ufat"; break;
            default:
                text_output+=text1[i];
        }
    }
    asignarTextoElemento('textoSalida',text_output);
}

function desencryptText(){
    let is_incomplete=Boolean(true)
    let text1 = String(document.querySelector('#textoEntrada').value);

    while(is_incomplete){
        if (text1.includes('ai')){
            text1 = text1.replace('ai','a');
        } else if(text1.includes('enter')){
            text1 = text1.replace('enter','e');
        } else if(text1.includes('imes')){
            text1 = text1.replace('imes','i');
        } else if(text1.includes('ober')){
            text1 = text1.replace('ober','o');
        } else if(text1.includes('ufat')){
            text1 = text1.replace('ufat','u');
        } else {
            is_incomplete=Boolean(false);
            asignarTextoElemento('textoSalida',text1);
        }
    }
}

function copiarTexto(){
    const text1 = document.getElementById('textoSalida').innerText;
    navigator.clipboard.writeText(text1);
}