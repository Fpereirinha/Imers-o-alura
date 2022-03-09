var secret = Math.floor(Math.random() * 10 + 1);
var cont = 0;
var botao = document.getElementById("btn_chutar");
console.log(secret);
function desativaBotao() {
  botao.disabled = true;
}
function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  if (cont == 3) {
    resultado.innerHTML =
      "Você errou 3 vezes, tente novamente. O número era " + secret;
    desativaBotao();
  } else {
    if (chute == secret) {
      cont += 1;
      resultado.innerHTML = "Você acertou com " + cont + " tentativas";
      desativaBotao();
    } else if (chute > 10 || chute < 0) {
      resultado.innerHTML = "Número fora do alcance";
    } else {
      if (secret > chute && cont < 3) {
        resultado.innerHTML = "Você errou o número é maior !";
      } else if (secret < chute && cont < 3) {
        resultado.innerHTML = "Você errou o número é menor !";
      }
      cont += 1;
      if (cont >= 3) {
        resultado.innerHTML =
          "Você errou 3 vezes, tente novamente. O número era " + secret;
        desativaBotao();
      }
    }
  }
}