const form = document.querySelector('#contato-form');
const campos = ['nome', 'email', 'assunto', 'mensagem'];
const confirmacao = document.querySelector('#confirmacao');
const statusFormulario = document.querySelector('#demonstracao');
const avisoRascunho = document.querySelector('#aviso-rascunho');
const limpar = document.querySelector('#limpar-rascunho');
const chaveRascunho = 'agrosustenta-rascunho';
const resumoErros = document.querySelector('#resumo-erros');
const listaErros = document.querySelector('#lista-erros');

// Sem JS, os atributos HTML continuam fazendo a validação nativa.
form.noValidate = true;
limpar.hidden = false;

function mostrarErro(campo, mensagem) {
  document.querySelector('#erro-' + campo.id).textContent = mensagem;
  campo.classList.toggle('campo-invalido', mensagem !== '');
  if (mensagem) {
    campo.setAttribute('aria-invalid', 'true');
  } else {
    campo.removeAttribute('aria-invalid');
  }
}

// O resumo liga cada mensagem ao campo correspondente.
function atualizarResumo() {
  listaErros.textContent = '';
  form.querySelectorAll('[aria-invalid="true"]').forEach((campo) => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#' + campo.id;
    const rotulo = campo.labels[0].textContent.trim();
    link.textContent = rotulo + ': ' + document.querySelector('#erro-' + campo.id).textContent;
    item.appendChild(link);
    listaErros.appendChild(item);
  });
  resumoErros.hidden = listaErros.children.length === 0;
}

function validar(campo) {
  let mensagem = '';
  const valor = campo.value.trim();
  if (campo === confirmacao) {
    if (!campo.checked) mensagem = 'Confirme que esta é uma demonstração.';
  } else if (!valor) {
    mensagem = 'Preencha este campo.';
  } else if (campo.id === 'nome' && valor.length < 2) {
    mensagem = 'Informe um nome com pelo menos 2 caracteres.';
  } else if (campo.id === 'email' && campo.validity.typeMismatch) {
    mensagem = 'Informe um e-mail válido, como ana@example.com.';
  } else if (campo.id === 'mensagem' && valor.length < 10) {
    mensagem = 'Escreva pelo menos 10 caracteres.';
  } else if (campo.maxLength > 0 && valor.length > campo.maxLength) {
    mensagem = 'Respeite o limite de ' + campo.maxLength + ' caracteres.';
  }
  mostrarErro(campo, mensagem);
  return mensagem === '';
}

function salvarRascunho() {
  const rascunho = {};
  campos.forEach((id) => {
    rascunho[id] = document.getElementById(id).value;
  });
  try {
    localStorage.setItem(chaveRascunho, JSON.stringify(rascunho));
    const mensagem = 'Rascunho salvo neste navegador. Use apenas dados fictícios.';
    if (avisoRascunho.textContent !== mensagem) avisoRascunho.textContent = mensagem;
  } catch {
    avisoRascunho.textContent = 'O navegador não permitiu salvar o rascunho. Você ainda pode testar o formulário.';
  }
}

try {
  const rascunho = JSON.parse(localStorage.getItem(chaveRascunho));
  if (rascunho && typeof rascunho === 'object') {
    campos.forEach((id) => {
      if (typeof rascunho[id] === 'string') document.getElementById(id).value = rascunho[id];
    });
    avisoRascunho.textContent = 'Rascunho recuperado deste navegador.';
  }
} catch {
  avisoRascunho.textContent = 'Não foi possível recuperar o rascunho. Preencha novamente os campos.';
}

form.addEventListener('input', (event) => {
  statusFormulario.classList.remove('visible');
  if (campos.includes(event.target.id)) salvarRascunho();
  if (event.target.hasAttribute('aria-invalid')) {
    validar(event.target);
    atualizarResumo();
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let primeiroErro = null;
  campos.concat('confirmacao').forEach((id) => {
    const campo = document.getElementById(id);
    if (!validar(campo) && primeiroErro === null) primeiroErro = campo;
  });
  atualizarResumo();
  if (primeiroErro) {
    statusFormulario.classList.remove('visible');
    resumoErros.focus();
    return;
  }
  salvarRascunho();
  statusFormulario.classList.add('visible');
  statusFormulario.textContent = 'Demonstração concluída. Nada foi enviado. O rascunho permanece neste navegador para você continuar depois.';
  statusFormulario.focus();
});

limpar.addEventListener('click', () => {
  try {
    localStorage.removeItem(chaveRascunho);
    avisoRascunho.textContent = 'Rascunho apagado deste navegador.';
  } catch {
    avisoRascunho.textContent = 'Campos limpos, mas não foi possível apagar o armazenamento. Confira as configurações do navegador.';
  }
  form.reset();
  campos.concat('confirmacao').forEach((id) => mostrarErro(document.getElementById(id), ''));
  statusFormulario.classList.remove('visible');
  atualizarResumo();
  document.querySelector('#nome').focus();
});
