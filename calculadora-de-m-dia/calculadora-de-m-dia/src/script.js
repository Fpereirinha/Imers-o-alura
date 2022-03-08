var nome = prompt("Qual o seu nome ?")
var n1 = prompt("Digite a primeira nota")
var n2 = prompt("Digite a segunda nota")
var n3 = prompt("Digite a terceira nota")
var n4 = prompt("Digite a quarta nota")
var nf = (parseInt(n1)+parseInt(n2)+parseInt(n3)+parseInt(n4)) / 4
console.log("Bem vindo " + nome)
console.log("A primeira nota foi: " + n1)
console.log("A segunda nota  foi: "+ n2)
console.log("A terceira nota foi: " + n3)
console.log("A quarto nota foi: " + n4)
console.log("A média foi: " + nf.toFixed(1))
if (nf > 6){
console.log("Você passou")}
else{
console.log("A média não foi o suficiente, recuperação")}
// declaração de váriaveis e comandos em geral //