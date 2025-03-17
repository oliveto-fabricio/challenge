//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let sorteados = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nome = input.value.trim();

  if (nome === "" || !isNaN(nome)) {
    alert("Insira um nome válido!");
    return;
  }

  amigos.push(nome);
  atualizarLista();

  input.value = "";
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  (lista.innerHTML = ""),
    amigos.forEach((amigo, index) => {
      const li = document.createElement("li");
      li.textContent = amigo + (index < amigos.lenght - 1 ? "," : "");
      lista.appendChild(li);
    });
}

function sortearAmigo() {
  if (amigos.lenght === 0) {
    alert("A lista de amigos está vazia.");
    return;
  }

  if (amigos.length <= 2) {
    alert("O numero minimo para iniciar o sorteio são 3 nomes");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);

  let amigoSorteado = amigos[indiceSorteado];

  sorteados.push(amigoSorteado);

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "O amigo secreto sorteado é: " + sorteados;

  
  sorteados = [];

  atualizarLista();
}

