
let formulario= document .querySelector(".formulario");
formulario.addEventListener("submit",(event) => {
    event.preventDefault();
    console.log(event);
    var nome = document.getElementById("nome").value;
    var idJogador = document.getElementById("id-jogador").value;
    var nomeJogador= document.getElementById("nome-dentro-d0-jogo").value;
    var mensagem = document.getElementById("mensagem").value;
    console.log(nome, idJogador, nomeJogador, mensagem);
} )
console.log("formulario");