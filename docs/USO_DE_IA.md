# Uso de IA

## Origem e registro disponível

Segundo relato do responsável em 06/11/2026, a base do site foi feita com um único prompt, acompanhado do PDF, que delimitava o escopo, HTML/CSS/JS e o nível de complexidade de segundo semestre. O texto original não foi preservado. O texto abaixo é uma reconstrução desse pedido a partir do relato e não um registro recuperado da conversa original.

## Prompt reconstruído da implementação inicial

> Desenvolva o site AgroSustenta da equipe CJM para a atividade de Front-End da UNICID, usando o PDF anexado como referência de escopo. O tema é fertilizantes sustentáveis, seus impactos ambientais e sociais e sua relação com eficiência e rentabilidade agrícola. Implemente as dez páginas pedidas, interligadas, com conteúdo em português, fontes identificadas, imagens, tabelas, galeria, notícias, formulário demonstrativo, vídeo, áudio, iframe e orçamento de hospedagem. Use HTML5, CSS3 e apenas JavaScript básico quando necessário. É um trabalho de Ciência da Computação do segundo semestre: mantenha o código simples, organizado e fácil de explicar, sem frameworks, backend, banco de dados ou dependências de frontend. Considere responsividade e acessibilidade e mantenha uma identidade visual consistente. Separe fatos de simulações e não invente resultados reais do projeto.

Esse único pedido representa a geração da base do site. Não foram criados vários prompts retroativos para dar a entender que existiram etapas de interação não registradas.

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
