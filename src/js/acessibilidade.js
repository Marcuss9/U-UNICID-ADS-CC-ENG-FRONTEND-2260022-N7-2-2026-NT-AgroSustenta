const controles = document.querySelector('#controles-acessibilidade');
const contraste = document.querySelector('#alto-contraste');
const texto = document.querySelector('#texto-ampliado');
const libras = document.querySelector('#ativar-libras');
const aviso = document.querySelector('#aviso-acessibilidade');

controles.hidden = false;

function atualizarBotoes() {
  contraste.setAttribute('aria-pressed', document.documentElement.classList.contains('alto-contraste'));
  texto.setAttribute('aria-pressed', document.documentElement.classList.contains('texto-ampliado'));
}

function salvarPreferencias() {
  const preferencias = {
    contraste: contraste.getAttribute('aria-pressed') === 'true',
    texto: texto.getAttribute('aria-pressed') === 'true'
  };
  try {
    localStorage.setItem('agrosustenta-preferencias', JSON.stringify(preferencias));
  } catch {
    aviso.textContent = 'A alteração funciona nesta página, mas o navegador não permitiu salvar a preferência.';
  }
}

// As mesmas preferências acompanham a navegação pelas dez páginas.
try {
  const preferencias = JSON.parse(localStorage.getItem('agrosustenta-preferencias'));
  if (preferencias) {
    document.documentElement.classList.toggle('alto-contraste', preferencias.contraste === true);
    document.documentElement.classList.toggle('texto-ampliado', preferencias.texto === true);
  }
} catch {
  aviso.textContent = 'Não foi possível recuperar as preferências. Os controles continuam disponíveis.';
}
atualizarBotoes();

contraste.addEventListener('click', () => {
  document.documentElement.classList.toggle('alto-contraste');
  atualizarBotoes();
  salvarPreferencias();
});

texto.addEventListener('click', () => {
  document.documentElement.classList.toggle('texto-ampliado');
  atualizarBotoes();
  salvarPreferencias();
});

// O tradutor oficial só é solicitado quando a pessoa ativa Libras.
libras.addEventListener('click', () => {
  libras.disabled = true;
  aviso.textContent = 'Carregando o VLibras. Este recurso precisa de internet.';
  const script = document.createElement('script');
  script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
  script.onload = () => {
    aviso.textContent = 'VLibras carregado. Use o botão flutuante de Libras para iniciar.';
    libras.textContent = 'Libras carregada';
  };
  script.onerror = () => {
    aviso.textContent = 'Não foi possível carregar o VLibras. Verifique a internet e tente novamente.';
    libras.disabled = false;
    script.remove();
  };
  document.body.appendChild(script);
});
