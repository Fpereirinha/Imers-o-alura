function Converter() {
  var valel = document.getElementById("valor");
  var vrl = parseFloat(valel.value) * 5;
  var vf = document.getElementById("valorConvertido");
  vf.innerHTML = "O valor em real é: R$" + vrl.toFixed(2);
}
function Converter2() {
  var veur = document.getElementById("valor2");
  var veurc = parseFloat(veur.value) * 6;
  var vfeur = document.getElementById("valorConvertido2");
  vfeur.innerHTML = "O valor em real é: R$" + veurc.toFixed(2);
}
function Converter3() {
  var vbtc = document.getElementById("valor3");
  var vbtcc = parseFloat(vbtc.value) / 196789.11;
  var vfbtc = document.getElementById("valorConvertido3");
  vfbtc.innerHTML = "O valor em BTC é: " + vbtcc.toFixed(8);
}
