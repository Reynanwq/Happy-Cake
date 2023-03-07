var menuBotao = document.getElementById('menuBotao');
var navegar = document.getElementById('navegar');
var menu = document.getElementById('menu');

menuBotao.onclick = function() {
    if (navegar.style.right == "-250px") {//deixa a area de nav fechada 
        navegar.style.right = "0";//se for aberta vai trocar a img do menu
        menu.src = "./assets/close.png";
    }
    else {
        navegar.style.right = "-250px";//se não ela vai estar fechada e mantém a img original do menu
        menu.src = "./assets/menu.png";
    }
}   