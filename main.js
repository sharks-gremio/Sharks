// main.js

document.addEventListener("DOMContentLoaded", function () {
  console.log("SHARK'S - site carregado com sucesso.");

  // Exemplo: alerta quando formulário é enviado com sucesso
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function () {
      setTimeout(() => {
        alert("Mensagem enviada! Obrigado pelo contato.");
      }, 300);
    });
  }
});