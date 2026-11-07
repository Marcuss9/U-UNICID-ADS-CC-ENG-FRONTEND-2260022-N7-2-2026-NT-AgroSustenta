# Revisão de acessibilidade

Data: 06/11/2026. Base: commit 6da7993. Esta revisão complementa os registros anteriores, que foram preservados. O código continua em HTML, CSS e JavaScript básico.

## Melhorias implementadas

- Foco de teclado com contorno branco e borda externa escura, para continuar perceptível em fundos claros e escuros. No alto contraste, permanece amarelo sobre preto.
- Links dos menus e rótulo de confirmação com mais área para interação.
- Legenda da fotografia com fundo escuro sólido: a leitura deixa de depender da luminosidade da imagem.
- Resumo de erros do formulário com título, foco e links para cada campo. O visitante usa Tab e Enter para ir ao erro; o resumo é atualizado ao corrigir os campos.
- Mensagem de rascunho salvo alterada apenas quando necessário, evitando repetir o mesmo anúncio a cada tecla.
- Iframe local da página de mídia acompanha alto contraste e texto ampliado, inclusive após recarregar; foco e região main também presentes no documento interno.

## Testes e resultados

| Verificação | Resultado |
| --- | --- |
| Teclado nas dez páginas | 369 elementos visíveis alcançados por Tab; retorno ao início sem prender o foco; link do iframe alcançado e ativado |
| Resumo de erros | Foco no resumo, cinco mensagens iniciais, links para os campos, remoção das mensagens corrigidas e envio demonstrativo válido |
| Iframe | Preferências sincronizadas ao alternar e ao recarregar; link abriu a página correta |
| Reflow e ampliação | Dez páginas em 320, 360, 768 e 1440 px, com texto padrão e ampliado, sem overflow da página; conferência adicional em 720 px |
| Contraste da legenda | Texto branco sobre #001d21: 17,53:1 nos dois modos |
| Texto do campo de mensagem | 17,53:1 no padrão e 21:1 no alto contraste |
| Texto de exemplo no campo | 5,85:1 no padrão e 15,46:1 no alto contraste |
| Auditoria automática | 20 auditorias axe-core, dez páginas nos dois modos, sem violações detectadas |
| HTML e CSS | Nu Html Checker 26.11.4 sem erros ou mensagens |
| Regressão | 15 cenários passaram, incluindo armazenamento, formulário, mídia, ausência de JS e falha de carregamento do VLibras |

Evidências em evidencias/2026-11-06-acessibilidade/: teclado-contraste.json, navegador.json, axe.json, html.json, css.json e quatro prints. Os prints de home comparam a base 6da7993 com esta revisão; os outros mostram foco e resumo de erros.

## Como conferir sem mouse

1. Recarregue a página e pressione Tab: o link Pular para o conteúdo deve aparecer com foco visível.
2. Use Tab e Enter/Espaço nos controles de contraste e texto; confirme as preferências ao navegar para outra página.
3. No contato, acione Testar mensagem sem preencher. O resumo recebe foco; Tab e Enter em um dos links levam ao campo correspondente.
4. Corrija os campos e confira que as mensagens somem. Complete a demonstração, recarregue e depois apague o rascunho.
5. Na página de mídia, percorra os controles nativos e o link dentro do quadro. O quadro deve acompanhar as preferências de leitura.

## Limites da evidência

O axe ainda marca os casos da legenda sobre imagem e do campo de mensagem para inspeção manual por não conseguir resolver sobreposição. Nesta revisão, os fundos e cores efetivos desses elementos foram conferidos no navegador e os contrastes calculados estão na tabela e em teclado-contraste.json. Os resultados incompletos da ferramenta foram preservados.

A passagem de Tab comprova a sequência e o alcance dos elementos, não uma avaliação humana de todos os comandos internos dos reprodutores ou do tradutor externo. O VLibras não foi submetido a avaliação linguística nesta etapa. Não foi usado leitor de tela humano. Foram testados reflow e ampliação de texto; zoom nativo do navegador a 200%/400% permanece sem execução específica. Não há declaração de certificação WCAG ou de publicação online.

Uma tentativa de capturar a comparação visual falhou porque a prévia anterior estava desligada. Ela foi iniciada novamente e os prints foram gerados com sucesso; a repetição está registrada em navegador.json.
