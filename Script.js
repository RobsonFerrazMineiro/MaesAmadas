function mostrarMensagem() {
  const nome = document.getElementById('nomeInput').value.trim().toLowerCase();

  if (nome) {
    fetch('mensagens/dados-maes.json')
      .then(response => response.json())
      .then(dados => {
        if (dados.hasOwnProperty(nome)) {
          // Nome existe no JSON como chave → redireciona para a página personalizada
          const nomeURL = encodeURIComponent(nome);
          window.location.href = `mensagens/personalizada.html?nome=${nomeURL}`;
        } else {
          // Nome não existe no JSON → vai para a homenagem especial genérica
          const nomeURL = encodeURIComponent(nome);
          window.location.href = `mensagens/especial.html?nome=${nomeURL}`;
        }
      })
      .catch(error => {
        console.error("Erro ao carregar o JSON:", error);
        alert("Ocorreu um erro ao buscar as homenagens. Tente novamente mais tarde.");
      });
  } else {
    alert("Por favor, digite seu nome completo.");
  }
}
