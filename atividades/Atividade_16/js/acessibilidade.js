var element = document.getElementById("header");

function modo_escuro(){
    document.getElementById("fundo").style.backgroundColor ="black";
    document.getElementById("fundo").style.color ="gray";
    document.getElementById("myimage").src = "image/fundo.jpg";
    element.innerHTML = "Testando Modo Escuro";
}

function modo_daltonico(){
    document.getElementById("fundo").style.backgroundColor ="violet";
    document.getElementById("fundo").style.color ="lime";
    document.getElementById("myimage").src = "image/daltonismo.jpg";
    element.innerHTML = "Testando Modo Daltonico";
}

function modo_normal(){
    document.getElementById("fundo").style.backgroundColor ="white";
    document.getElementById("fundo").style.color ="black";
    document.getElementById("fundo").style.fontSize ="18px";
    document.getElementById("myimage").src = "image/fundo.jpg";
    element.innerHTML = "Testando Modo Normal";
}

function modo_baixa_visao(){
    document.getElementById("fundo").style.backgroundColor ="white";
    document.getElementById("fundo").style.color ="black";
    document.getElementById("fundo").style.fontSize ="30px";
    document.getElementById("myimage").src = "image/fundo.jpg";
    element.innerHTML = "Testando Modo Baixa Visão";
}