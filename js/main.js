
//arrays 
var pilha = ["maca", "pera", "uva"];
console.log(pilha);
/*pilha.push("banana");
console.log(pilha);
console.log(pilha[0]);
console.log(pilha.toString());
console.log(pilha.join("/"));

//dicionario
var fruta = {nome:"maça",cor:"vermelha"};
console.log(fruta);
console.log(fruta.cor);

//array de dicionarios
var frutas = [{nome:"banana", cor:"amarelo"}, {peso:1, valor:1.9}];

console.log(frutas);
console.log(frutas[0].cor);
console.log(frutas[1].valor);

//pede a entrada para o usuario
var idade = prompt("Qual sua idade");

if(idade >= 18){
    alert("maior")
} else{
    alert("menor")
}

var d = new Date();
console.log(d.getMonth());

function soma(n1,n2){
    return n1+n2;
}

console.log(soma(3,7))*/

function clicou(){
    console.log(document.getElementById("agradecimento"));
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function trocar(elemento){
    elemento.innerHTML = "<b>vc passou o mouse</b>";
}
function voltar(){
    document.getElementById("texto").innerHTML = "<b>voltou</b>";
}
function ir(){
    window.open("https://portal.tjpr.jus.br/sdp");//abre em outra janela
    window.location.href = "https://portal.tjpr.jus.br/sdp";//abre na mesma janela
}

function mudou(elemento){
    alert(elemento.value);
}



