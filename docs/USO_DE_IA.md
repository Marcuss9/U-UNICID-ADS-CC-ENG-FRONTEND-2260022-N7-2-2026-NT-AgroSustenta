# Uso de IA

## Origem e registro disponível

Segundo relato do responsável em 06/11/2026, a base do site foi feita com um único prompt, acompanhado do PDF, que delimitava o escopo, HTML/CSS/JS e o nível de complexidade de segundo semestre. O texto original não foi preservado. O texto abaixo é uma reconstrução desse pedido a partir do relato e não um registro recuperado da conversa original.

## Prompt reconstruído da implementação inicial

> Desenvolva o site AgroSustenta da equipe CJM para a atividade de Front-End da UNICID, usando o PDF anexado como referência de escopo. O tema é fertilizantes sustentáveis, seus impactos ambientais e sociais e sua relação com eficiência e rentabilidade agrícola. Implemente as dez páginas pedidas, interligadas, com conteúdo em português, fontes identificadas, imagens, tabelas, galeria, notícias, formulário demonstrativo, vídeo, áudio, iframe e orçamento de hospedagem. Use HTML5, CSS3 e apenas JavaScript básico quando necessário. É um trabalho de Ciência da Computação do segundo semestre: mantenha o código simples, organizado e fácil de explicar, sem frameworks, backend, banco de dados ou dependências de frontend. Considere responsividade e acessibilidade e mantenha uma identidade visual consistente. Separe fatos de simulações e não invente resultados reais do projeto.

Esse único pedido representa a geração da base do site. Não foram criados vários prompts retroativos para dar a entender que existiram etapas de interação não registradas.

## Local dos prompts e fidelidade do registro

O roteiro da 2ª entrega pede o **registro dos prompts usados no diário de bordo**, com indicação do que foi aceito e do que foi corrigido. Neste repositório, \`docs/DIARIO_DE_BORDO.md\` registra os fatos e aponta para \`docs/USO_DE_IA.md\`, que reúne o contexto, exemplos completos e análise das decisões.

**Importante:** o prompt original da geração inicial não foi recuperado. Os três textos abaixo são **modelos de prompts que poderiam orientar o desenvolvimento**, elaborados para ilustrar o processo à banca. **Não são transcrições de três interações reais nem devem ser apresentados como prompts efetivamente utilizados sem evidência adicional.** O primeiro texto reconstruído, preservado acima, continua sendo o relato da solicitação inicial.

O anexo \`Texto para o Prompt - Rules.txt\` orienta a escrita de *rules* de agentes, com seis partes (objetivo, contexto, regras, exemplo concreto, erros a evitar e quando perguntar). Essa organização foi adaptada aos exemplos abaixo. O anexo não comprova que tais prompts foram enviados a uma IA, nem exige criar novos arquivos \`.mdc\` para o site.

## Três exemplos de prompts para a construção do AgroSustenta

### Prompt 1 — Estrutura e identidade visual das dez páginas

> **Objetivo:** Estruture o site educativo AgroSustenta, da equipe CJM da UNICID, com dez páginas interligadas sobre fertilizantes sustentáveis, impactos socioambientais, eficiência e rentabilidade agrícola.
>
> **Contexto:** Utilize o PDF de escopo do projeto como referência e mantenha a complexidade compatível com alunos do segundo semestre de Ciência da Computação. O site utiliza HTML5, CSS3 e JavaScript básico, sem backend, frameworks ou banco de dados.
>
> **Regras:** Organize os HTML em \`src/\`, o CSS em \`src/css/style.css\` e os recursos em \`src/assets/\`. Mantenha o menu das dez páginas, HTML semântico, português do Brasil, layout responsivo, identidade visual consistente e referências para dados e imagens. Diferencie exemplos didáticos de projetos realmente executados.
>
> **Exemplo concreto:** A página existente \`src/index.html\` utiliza \`<main id="conteudo" tabindex="-1">\` como região principal e destino do link de salto; preserve esse padrão nas páginas criadas.
>
> **Erros a evitar:** Não invente atividades reais de uma ONG, resultados de campo ou estatísticas sem fonte; não introduza novas páginas, dependências ou tecnologias fora do escopo.
>
> **Quando perguntar:** Antes de acrescentar uma funcionalidade ou conteúdo que não esteja no escopo, peça esclarecimentos à equipe.

**Relação com a entrega:** estrutura em dez páginas, CSS compartilhado, conteúdo informativo e navegação. **Status:** exemplo proposto; não há histórico que comprove seu envio exato.

### Prompt 2 — Formulário interativo em JavaScript

> **Objetivo:** Complemente o formulário acadêmico de contato do AgroSustenta com validação personalizada em JavaScript e rascunho persistido no navegador.
>
> **Contexto:** O formulário está em \`src/contato.html\`, o script em \`src/js/contato.js\` e nenhum dado deve ser enviado a um servidor. O trabalho precisa demonstrar eventos do DOM, \`preventDefault()\`, mensagens de erro, bordas destacadas e \`localStorage\`.
>
> **Regras:** Preserve as validações nativas de HTML5 para uso sem JavaScript. Ao enviar, confira nome, e-mail, assunto, mensagem e confirmação; vincule cada erro ao campo correspondente, destaque visualmente e permita correção. Salve apenas o rascunho local, recupere-o ao recarregar e ofereça botão para apagá-lo. Use código simples e comentários discretos.
>
> **Exemplo concreto:** Preserve a estrutura real \`<form id="contato-form" action="contato.html#demonstracao" method="get">\` e utilize o evento \`submit\` no script, impedindo o envio real.
>
> **Erros a evitar:** Não crie backend, API, banco, envio de e-mail ou cadastro verdadeiro. Não remova a indicação de demonstração; não inclua atributos \`name\` que coloquem dados do formulário na URL.
>
> **Quando perguntar:** Se houver dúvida sobre dados a guardar ou sobre o comportamento de um campo, solicite orientação antes de modificar a coleta ou a persistência.

**Relação com a entrega:** \`src/contato.html\`, \`src/js/contato.js\` e os testes de formulário em \`docs/VALIDACAO.md\`. **Status:** exemplo proposto; não há histórico que comprove seu envio exato.

### Prompt 3 — Acessibilidade, revisão e preparação da publicação

> **Objetivo:** Revise a versão final do AgroSustenta para melhorar acessibilidade, responsividade e condições de publicação, sem substituir o site por outra tecnologia.
>
> **Contexto:** O projeto já possui dez HTML, \`src/css/style.css\`, \`src/js/acessibilidade.js\`, mídia local, iframe e a página \`src/orcamento_hospedagem.html\`. A hospedagem adotada é GitHub Pages; alternativas de hospedagem devem ser comparadas de forma informativa.
>
> **Regras:** Verifique teclado, foco visível, links de salto, contraste, ampliação de texto, rótulos do formulário e alternativas textuais para vídeo e áudio. Preserve o VLibras sob demanda, as fontes e o histórico de testes. Confira a estrutura HTML e links relativos e registre limites dos testes executados. Documente a escolha do GitHub Pages, sem modificar infraestrutura ou publicar sem autorização específica.
>
> **Exemplo concreto:** Em \`src/js/acessibilidade.js\` já existe \`document.documentElement.classList.toggle('alto-contraste');\`; preserve o controle e a preferência entre páginas, verificando seu efeito no CSS.
>
> **Erros a evitar:** Não afirme certificação WCAG sem testes suficientes, não invente evidências de acessibilidade e não trate propostas de hospedagem como serviços efetivamente contratados.
>
> **Quando perguntar:** Consulte a equipe antes de mudanças significativas na identidade visual, na hospedagem ou em recursos não previstos na rubrica.

**Relação com a entrega:** \`docs/ACESSIBILIDADE.md\`, \`docs/VALIDACAO.md\`, \`src/js/acessibilidade.js\` e documentação de publicação. **Status:** exemplo proposto; não há histórico que comprove seu envio exato.

## Revisão atual — 06/11/2026

O responsável solicitou aplicar as correções da auditoria, manter código limpo e simples, usar comentários discretos, não criar chatbot, aceitar outras hospedagens além do Railway, acrescentar recursos de acessibilidade e organizar melhorias e diário. Pediu também reconstruir o prompt perdido. Essa reconstrução foi identificada como tal para não apresentar um texto novo como evidência histórica.

## O que foi aproveitado

- Estrutura de dez páginas e navegação por links relativos.
- CSS compartilhado e identidade visual existente.
- Conteúdo educativo, fontes e simulações já identificadas.
- Recursos HTML nativos como required, type=email, details, video e audio.

## O que foi corrigido

- A base não cumpria a exigência de validação em JS e localStorage da segunda entrega; esses comportamentos foram acrescentados.
- Foram corrigidos fechamentos inválidos de elementos de mídia.
- Foram acrescentadas relações explícitas com os ODS e uma área de apoio.
- Acessibilidade passou a incluir controles de contraste e texto, além do carregamento opcional de Libras.
- O áudio principal passou a ter texto integral correspondente, sem atribuir ao resumo do podcast o papel de transcrição.
- Foram atualizados requisitos, orçamento e documentação; testes e publicação não são tratados como concluídos apenas pela geração do código.

## Decisões de revisão

Não foram adotados chatbot, backend, banco, frameworks nem envio real de dados. O pedido de fabricar um histórico original de prompts não foi incorporado. A apresentação ficou fora desta etapa.

## Como explicar o código

Em contato.js, localizar o formulário, percorrer os campos, aplicar condições de validação, apresentar erros, impedir envio e salvar/restaurar um objeto JSON. Em acessibilidade.js, alternar classes no HTML, atualizar aria-pressed, salvar preferências e criar o script oficial do VLibras apenas ao clicar. O arquivo de áudio foi gerado com voz sintética local do eSpeak NG a partir do texto publicado integralmente; isso não acrescenta biblioteca ao site.

A equipe precisa revisar e explicar esses trechos. A geração por IA não comprova domínio do código nem substitui a participação real dos integrantes.
