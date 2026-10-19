// A validação é nativa do HTML5; este código só evita recarregar a página.
const form = document.querySelector('#contato-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = document.querySelector('#demonstracao');
  status.hidden = false;
  status.classList.add('visible');
  status.focus();
});
