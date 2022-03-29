
const inputSenha = document.getElementById("senha")
const olhoSvg = document.getElementById("olhoAberto")


function eyeClick(){
    if(inputSenha.type === "password"){
        showPassword()
    } else {
        hidePassword()
    }

}



function showPassword(){
    inputSenha.setAttribute('type', 'text')
    olhoSvg.setAttribute('src', 'imgs/olhoFechado.svg')
}


function hidePassword(){
    inputSenha.setAttribute("type", "password")
    olhoSvg.setAttribute('src', 'imgs/olho.svg')
}