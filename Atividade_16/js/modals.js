let modal = document.querySelector(".modal")
let janela_escura = document.querySelector(".janela_escura")
let imagem = document.querySelector(".imagem")

function abrir_modal(){
    modal.style.visibility="visible";
    janela_escura.style.visibility="visible";
    imagem.style.visibility="visible";
}

function fechar_modal(){

    modal.style.visibility="hidden";
    janela_escura.style.visibility="hidden";
    imagem.style.visibility="hidden";
}
