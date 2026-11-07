# Validação da revisão de 06/11/2026

Base: branch main no commit 55ef626b. Resultados desta revisão local, em Chromium 1193, sem frameworks ou dependências acrescentadas ao site. O registro anterior permanece em VALIDACAO_2026-10-19.md.

## Resultados executados

| Verificação | Resultado | Evidência |
| --- | --- | --- |
| HTML das dez páginas e do iframe | Nu Html Checker 26.11.4: zero erros e zero mensagens | evidencias/2026-11-06/html-atual.json |
| HTML anterior | Três erros de fechamento source/track em midia.html | evidencias/2026-11-06/html-anterior.json |
| CSS compartilhado | Nu Html Checker: zero erros | evidencias/2026-11-06/css-atual.json |
| Estrutura e links locais | Dez páginas principais, 11 HTML com iframe, 348 referências locais, zero destinos/âncoras ausentes e zero IDs repetidos | evidencias/2026-11-06/estrutura.json |
| JavaScript | Verificação de sintaxe dos dois scripts passou; zero exceções JS nos cenários de navegador | evidencias/2026-11-06/navegador.json |
| Responsividade padrão | Dez páginas em 360, 768 e 1440 px sem overflow horizontal da página | navegador.json |
| Texto ampliado e contraste | Dez páginas em 320 e 1440 px sem overflow; fonte ampliada em 25%; preferências mantidas entre páginas | navegador.json; contato-alto-contraste.png |
| Formulário | Vazio, espaços, e-mail inválido, mensagem curta, correção e confirmação válida; foco no primeiro erro e no resultado | navegador.json; contato-erros-depois.png |
| Persistência | Rascunho recuperado após recarregar; confirmação não persistida; apagar limpa campos e localStorage | navegador.json |
| Falha de armazenamento | JSON corrompido e armazenamento bloqueado não interrompem os controles; avisos apresentados | navegador.json |
| Sem JavaScript | Conteúdo e formulário nativo disponíveis; controles dependentes de JS ocultos; dados não incluídos na URL | navegador.json |
| Teclado | Link de salto, alternância das preferências e sequência dos campos até o envio, com foco visível | navegador.json |
| Mídia local | WebM de 30,042 s e MP3 de 28,138 s carregados e reproduzidos; tempo de reprodução avançou; arquivo de legendas disponível e iframe carregado | navegador.json, campo media |
| VLibras | Script oficial carregado e botão flutuante renderizado; falha de rede simulada permite tentar novamente | navegador.json; libras-carregamento.png |
| Acessibilidade automática | axe-core 4.10.3, regras WCAG A/AA selecionadas: 20 auditorias, zero violações detectadas | evidencias/2026-11-06/axe.json |
| Preservação | Escopo PDF, atividade original, captura antiga e MP4 original preservados byte a byte | estrutura.json |

## Correções encontradas durante a verificação

- Texto ampliado em 320 px podia causar overflow: adicionada quebra de palavras longas.
- A transição ao ativar alto contraste podia passar por cores intermediárias de baixo contraste: transições desativadas nesse modo e hover dos botões corrigido.
- O Chromium usado no teste não disponibiliza o codec H.264 do MP4 original: acrescentada uma conversão WebM do mesmo vídeo, preservando MP4, legendas e transcrição. A reprodução WebM foi confirmada.
- O áudio principal agora é uma leitura local do texto educativo, com transcrição correspondente, em vez de depender da transcrição indisponível do podcast externo. O podcast permanece como link de aprofundamento.

## Prints e comparação visual

Em evidencias/2026-11-06/: home-desktop-antes.png, home-desktop-depois.png, home-celular-antes.png, home-celular-depois.png, contato-antes.png, contato-depois.png, contato-erros-depois.png, contato-alto-contraste.png e libras-carregamento.png.

Os prints de antes vêm da cópia exata da base consultada, servida separadamente. Desktop e celular usam os mesmos tamanhos nas duas versões. Foram inspecionados visualmente os estados de celular e alto contraste; a inspeção não equivale a testes com todos os usuários.

## Limites e pendências

- Os testes foram locais. Ainda é necessário escolher o serviço, publicar e verificar a URL real com HTTPS, incluindo acesso sem login. Nenhum deploy foi realizado.
- A navegação por teclado foi verificada nos caminhos descritos; não foi executado um ensaio humano de todos os links, controles nativos de mídia e recursos do tradutor em todas as páginas.
- O axe deixou itens de inspeção manual registrados em incomplete, incluindo contraste sobre imagens e a avaliação do conteúdo do iframe. Zero violações automáticas não significa certificação WCAG. Não foi usado leitor de tela humano nem realizado teste com participantes PCD.
- O reflow em 320 px foi verificado; não é uma alegação de teste de zoom nativo de 400% em todos os navegadores.
- O VLibras foi conferido até carregamento do script e renderização do botão. A tradução e sua qualidade linguística não foram homologadas. A disponibilidade depende de terceiros.
- Os abortos de mídia em navegador.json correspondem a navegações interrompidas; a falha de rede do script VLibras foi provocada no teste de recuperação. A reprodução efetiva posterior das mídias e o carregamento real do script estão registrados separadamente.
- Feedback formal do MVP, RAs, participação de todos no GitHub e acesso do professor ainda exigem confirmação da equipe. Não houve apresentação nesta etapa.

## Conferência manual rápida

1. Servir a pasta src e navegar pelas dez páginas no computador e no celular.
2. Usar Tab e Enter; ativar contraste e texto ampliado; abrir outra página e conferir as preferências.
3. Enviar o formulário vazio, conferir os erros, preencher valores fictícios, confirmar e recarregar.
4. Apagar o rascunho e recarregar novamente.
5. Reproduzir vídeo e áudio, ativar legendas, conferir transcrições e abrir o iframe.
6. Com internet, ativar Libras e avaliar o recurso com uma pessoa que utilize Libras.
7. Após publicar, repetir na URL HTTPS e registrar o endereço no README e no orçamento.

Ferramentas temporárias de verificação não são necessárias para executar o site. Nu Html Checker: https://validator.github.io/validator/. A auditoria automática utilizou axe-core; a reprodução e as interações foram verificadas no navegador.


## Complemento: revisão de acessibilidade de 06/11/2026

A revisão posterior à base 6da7993 melhorou foco, legenda, resumo de erros e preferências do iframe. A conferência de Tab foi ampliada às dez páginas: 369 controles visíveis alcançados, com retorno ao início sem prender o foco. Os contrastes dos elementos que a ferramenta deixou pendentes foram calculados e passaram de 4,5:1. Os registros anteriores permanecem históricos. Resultados completos, novos prints e limites: [ACESSIBILIDADE.md](ACESSIBILIDADE.md).

## Publicação confirmada em 06/11/2026

URL: https://marcuss9.github.io/U-UNICID-ADS-CC-ENG-FRONTEND-2260022-N7-2-2026-NT-AgroSustenta/

A pendência anterior de publicação foi resolvida. As dez páginas e os recursos principais foram verificados em HTTPS, sem login, com formulário, persistência, preferências e mídia. A versão publicada conferida é b932ab5. Ver PUBLICACAO.md e evidencias/2026-11-06-publicacao/publicacao.json. Os testes locais anteriores permanecem como evidência histórica da implementação.
