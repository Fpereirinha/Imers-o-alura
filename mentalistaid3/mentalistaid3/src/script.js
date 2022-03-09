var secret = Math.floor(Math.random() * 10 + 1);
var cont = 0;
console.log(secret);
function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (cont >= 3) {
    resultado.innerHTML =
      "Você errou 3 vezes, tente novamente. O número era " + secret;
  } else {
    if (chute == secret) {
      resultado.innerHTML = "Você acertou";
      console.log("Acertou");
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
      }
    }
  }
}
