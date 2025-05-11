const dados = {
  "maria de lourdes": "mariadelourdes.html",
  // Adicione outras mães aqui com o nome digitado e o nome do arquivo correspondente
};

function mostrarMensagem() {
  const entrada = document.getElementById("nomeInput").value;
  const nome = normalizarTexto(entrada);

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
// Função para normalizar o texto removendo acentos e espaços extras
// e convertendo para minúsculas
function normalizarTexto(texto) {
  return texto
    .normalize("NFD") // Remove acentos
    .replace(/[\u0300-\u036f]/g, "") // Remove caracteres diacríticos
    .replace(/\s+/g, " ") // Substitui múltiplos espaços por 1
    .trim()
    .toLowerCase();
}
