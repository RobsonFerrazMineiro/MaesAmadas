const dados = {
  "maria janiscleide": "mariajaniscleide.html",
  "maria vilma": "mariadvilma.html",
  "antonia jilineide": "deda.html",
  "eliane holanda": "elianevisinha.html",
  "maria cileide": "mariacileide.html",
  "deusalise bento": "deusalise.html"
  // Adicione outras mães aqui com o nome digitado e o nome do arquivo correspondente
};

function mostrarMensagem() {
  const nome = document.getElementById('nomeInput').value.trim().toLowerCase();

  if (nome) {
    if (dados.hasOwnProperty(nome)) {
      window.location.href = `mensagens/${dados[nome]}`;
    } else {
      const nomeURL = encodeURIComponent(nome);
      window.location.href = `mensagens/especial.html?nome=${nomeURL}`;
    }
  } else {
    alert("Por favor, digite somente o primeiro e o segundo nomes.");
  }
}
