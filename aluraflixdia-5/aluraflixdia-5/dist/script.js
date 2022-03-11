function adicionarFilme() {
  var linkf = document.getElementById("filme").value;
  if (linkf.endsWith(".jpg")) {
    listarFilme(linkf);
  } else {
    console.error("Endereço inválido");
  }

  document.getElementById("filme").value = "";
}
function listarFilme(filme) {
  var imagem = "<img src=" + filme + ">";
  var listaFilmes = document.getElementById("listaFilmes");
  listaFilmes.innerHTML = listaFilmes.innerHTML + imagem;
}