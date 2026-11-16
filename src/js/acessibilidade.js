// Controles compartilhados de acessibilidade do AgroSustenta.
const controles = document.querySelector('#controles-acessibilidade');
const contraste = document.querySelector('#alto-contraste');
const texto = document.querySelector('#texto-ampliado');
const libras = document.querySelector('#ativar-libras');
const aviso = document.querySelector('#aviso-acessibilidade');

if (controles && contraste && texto && libras && aviso) {
  controles.hidden = false;
  controles.setAttribute('aria-label', 'Preferências visuais, tradução e leitura');

  function atualizarQuadro() {
    const quadro = document.querySelector('#quadro-aprendizagem');
    if (quadro && quadro.contentDocument) {
      const raiz = quadro.contentDocument.documentElement;
      raiz.classList.toggle('alto-contraste', document.documentElement.classList.contains('alto-contraste'));
      raiz.classList.toggle('texto-ampliado', document.documentElement.classList.contains('texto-ampliado'));
    }
  }
  function atualizarBotoes() {
    contraste.setAttribute('aria-pressed', document.documentElement.classList.contains('alto-contraste'));
    texto.setAttribute('aria-pressed', document.documentElement.classList.contains('texto-ampliado'));
    atualizarQuadro();
  }
  const quadroLocal = document.querySelector('#quadro-aprendizagem');
  if (quadroLocal) quadroLocal.addEventListener('load', atualizarQuadro);

  // Salvando preferências no navegador
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

  //Recuperando as preferências salvas
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
    document.documentElement.classList.toggle('alto-contraste'); //O método toggle() adiciona ou remove a classe alto-contraste
    atualizarBotoes();
    salvarPreferencias();
  });
  texto.addEventListener('click', () => {
    document.documentElement.classList.toggle('texto-ampliado');
    atualizarBotoes();
    salvarPreferencias();
  });

  // Leitura opcional do conteúdo principal. Não substitui NVDA ou outro leitor de tela.
  const grupoLeitura = document.createElement('div'); //cria um elemento HTML em memória.
  grupoLeitura.className = 'a11y-reading-controls'; //define a classe CSS do elemento.
  grupoLeitura.setAttribute('role', 'group'); //indica que esse elemento agrupa controles relacionados.
  grupoLeitura.setAttribute('aria-label', 'Controles de leitura em voz alta');

  function criarBotao(rotulo) { //cria o botao html
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.textContent = rotulo;
    return botao;
  }
  const botaoLer = criarBotao('Ler página');
  const botaoPausar = criarBotao('Pausar leitura');
  const botaoContinuar = criarBotao('Continuar leitura');
  const botaoParar = criarBotao('Interromper leitura');
  botaoLer.setAttribute('aria-controls', 'conteudo');
  botaoPausar.disabled = true;
  botaoContinuar.disabled = true;
  botaoParar.disabled = true;
  grupoLeitura.append(botaoLer, botaoPausar, botaoContinuar, botaoParar);
  const vozDisponivel = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  if (!vozDisponivel) {
    botaoLer.disabled = true;
    botaoLer.title = 'Leitura em voz alta indisponível neste navegador';
  }
  controles.appendChild(grupoLeitura); // insere o grupo de leitura dentro da barra de acessibilidade existente na página.
  if (!vozDisponivel) aviso.textContent = 'Leitura em voz alta não está disponível neste navegador.';

  let partes = []; // Array com trechos do texto que serão narrados
  let indice = 0; // Posição do próximo trecho
  let sessao = 0; // Identificador da sessão de leitura
  let lendo = false; // Indica que existe uma leitura ativa
  let pausado = false; // Indica se a leitura está pausada
  let falaAtual = null; // Guarda o objeto referente ao trecho atual

  function atualizarEstado(estado) {
    botaoLer.disabled = estado === 'lendo' || estado === 'pausado';
    botaoPausar.disabled = estado !== 'lendo';
    botaoContinuar.disabled = estado !== 'pausado';
    botaoParar.disabled = estado === 'parado' || estado === 'concluido';
  }
  function dividirTexto(texto, limite = 220) {
    const palavras = texto.split(/\s+/); // split() divide uma string em partes e retorna um array. Exemplo: ['Olá', 'mundo', 'JavaScript']
    const resultado = [];
    let atual = '';
    for (const palavra of palavras) { // for...of percorre os elementos de um array, um por vez.
      const proximo = atual ? atual + ' ' + palavra : palavra;
      if (proximo.length > limite && atual) {
        resultado.push(atual);
        atual = palavra;
      } else {
        atual = proximo;
      }
    }
    if (atual) resultado.push(atual);
    return resultado;
  }
  function obterTexto() {
    const principal = document.querySelector('main');
    if (!principal) return [];
    const textoPrincipal = principal.innerText || principal.textContent || '';
    return textoPrincipal.split(/\n+/) // split(/\n+/) separa o texto onde houver uma ou mais quebras de linha.
      .map(linha => linha.replace(/\s+/g, ' ').trim()) // map() percorre cada linha e devolve uma nova versão transformada.
      .filter(Boolean)
      .flatMap(linha => dividirTexto(linha)); //flatMap() executa a função dividirTexto() para cada linha e combina os arrays resultantes em um único array.
  }
  function falarProximo(id) {
    if (id !== sessao || !lendo || pausado) return; // A função não deve continuar quando a sessão informada não for a atual, quando não houver uma leitura ativa ou quando ela estiver pausada.
    if (indice >= partes.length) {
      lendo = false;
      atualizarEstado('concluido');
      aviso.textContent = 'Leitura da página concluída.';
      return;
    }
    const fala = new SpeechSynthesisUtterance(partes[indice]);
    falaAtual = fala;
    fala.lang = 'pt-BR';
    fala.onend = () => {
      if (id !== sessao || falaAtual !== fala) return;
      falaAtual = null;
      indice += 1;
      // Alguns navegadores concluem um trecho mesmo após o comando de pausa.
      // O próximo trecho só deve começar quando a leitura for retomada.
      if (!pausado) falarProximo(id);
    };
    fala.onerror = evento => {
      if (id !== sessao) return;
      lendo = false;
      pausado = false;
      falaAtual = null;
      atualizarEstado('parado');
      aviso.textContent = evento.error === 'canceled'
        ? 'Leitura interrompida.'
        : 'O navegador não conseguiu continuar a leitura em voz alta.';
    };
    window.speechSynthesis.speak(fala);
  }

  botaoLer.addEventListener('click', () => {
    if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
      aviso.textContent = 'A leitura em voz alta não está disponível neste navegador.';
      return;
    }
    window.speechSynthesis.cancel();
    sessao += 1;
    pausado = false;
    falaAtual = null;
    partes = obterTexto();
    indice = 0;
    if (!partes.length) {
      atualizarEstado('parado');
      aviso.textContent = 'Não foi encontrado conteúdo principal para leitura.';
      return;
    }
    lendo = true;
    atualizarEstado('lendo');
    aviso.textContent = 'Leitura da página iniciada.';
    falarProximo(sessao);
  });
  botaoPausar.addEventListener('click', () => {
    if (!vozDisponivel || !lendo || pausado) return;
    // Conserva a sessão e a posição atual ao pausar.
    pausado = true;
    window.speechSynthesis.pause();
    atualizarEstado('pausado');
    aviso.textContent = 'Leitura pausada.';
  });
  botaoContinuar.addEventListener('click', () => {
    if (!vozDisponivel || !lendo || !pausado) return;
    pausado = false;
    // Retoma a fala corrente; se ela terminou durante a pausa,
    // prossegue diretamente para o próximo trecho.
    if (window.speechSynthesis.paused) window.speechSynthesis.resume();
    if (!falaAtual || (!window.speechSynthesis.speaking && !window.speechSynthesis.pending)) {
      falaAtual = null;
      falarProximo(sessao);
    }
    atualizarEstado('lendo');
    aviso.textContent = 'Leitura continuada.';
  });
  botaoParar.addEventListener('click', () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    sessao += 1;
    lendo = false;
    pausado = false;
    falaAtual = null;
    partes = [];
    indice = 0;
    atualizarEstado('parado');
    aviso.textContent = 'Leitura interrompida.';
  });
  window.addEventListener('pagehide', () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    sessao += 1;
    lendo = false;
    pausado = false;
    falaAtual = null;
  });

  // O VLibras só é carregado quando a pessoa solicita o recurso.
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
}
