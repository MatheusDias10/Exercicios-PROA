function exibe_mercedes(){
    document.getElementById("mercedes").style.visibility="visible";
    document.getElementById("veneno").style.visibility="hidden";
    document.getElementById("jetta").style.visibility="hidden";
}

function exibe_veneno(){
    document.getElementById("mercedes").style.visibility="visible";
    document.getElementById("veneno").style.visibility="visible";
    document.getElementById("jetta").style.visibility="hidden";
}

function exibe_jetta(){
    document.getElementById("mercedes").style.visibility="hidden";
    document.getElementById("veneno").style.visibility="hidden";
    document.getElementById("jetta").style.visibility="visible";
}

function hidden_div(){
    document.getElementById("mercedes").style.visibility="hidden";
    document.getElementById("veneno").style.visibility="hidden";
    document.getElementById("jetta").style.visibility="hidden";
}