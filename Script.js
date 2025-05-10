function mostrarMensagem() {
  const nome = document.getElementById('nomeInput').value.trim().toLowerCase();

  if (nome) {
    // Redireciona para a página personalizada (ex: cleide.html)
    window.location.href = `Mensagens/${nome}.html`;
  } else {
    alert("Por favor, digite um nome.");
  }
}

