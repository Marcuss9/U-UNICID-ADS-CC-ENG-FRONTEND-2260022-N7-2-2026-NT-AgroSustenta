# Validação desta implementação

Data: 19/10/2026. Separação entre verificações executadas e revisão ainda necessária.

## Executado

- **10 páginas principais**, todas com menu para as dez páginas, indicação de página atual e rodapé compartilhado.
- **435 verificações estruturais**, sem erros, por leitura e análise local dos documentos: doctype, idioma, viewport, descrição, um H1 por documento, região principal, IDs únicos, destinos locais, âncoras, texto alternativo, títulos de iframe e associação de rótulos.
- Presença dos campos obrigatórios, `type="email"`, ausência de nomes de campos que pudessem enviar valores pela URL e estrutura do formulário HTML5.
- Presença de vídeo, legendas WebVTT, áudio e iframe; existência dos arquivos locais e decodificação das imagens WebP.
- `node --check src/js/contato.js`: passou. O Node foi usado somente como ferramenta de verificação, não é dependência do projeto.
- Leitura válida do `railway.toml`, conferência do healthcheck `/index.html` e da variável `${PORT}` no template do Nginx.
- Balanceamento de delimitadores do CSS. Não equivale à validação completa do CSS.
- `ffprobe`: vídeo H.264 de aproximadamente 30 segundos, 960 × 540, sem áudio, otimizado com faststart. Aproximadamente 90 KB.
- Inspeção das três fotografias baixadas e do pôster do vídeo.
- Sem `package.json`, frameworks, banco, scripts de build ou dependências do front-end. Um único script JS de 347 bytes.

## Limites desta sessão

- Não foi executada revisão visual das páginas em navegador. Não declaramos ausência comprovada de overflow ou certificação de responsividade.
- Docker não estava instalado. A imagem não foi construída nem executada nesta sessão; o deploy Railway também não foi realizado.
- Não foi executado o validador externo W3C nem teste com leitor de tela. A análise local não substitui essas etapas.
- O podcast é externo e depende da disponibilidade do MAPA. O resumo apresentado não substitui transcrição integral para pessoas que precisam de alternativa textual completa ao episódio.
- A publicação demonstrativa no GitHub Pages depende do plano e das configurações do repositório privado.

## Roteiro antes de publicar

1. Abrir todas as páginas em larguras de 360, 768 e 1440 px; testar zoom de 200% e 400%, inclusive tabelas e menus.
2. Navegar apenas por teclado: link para pular conteúdo, menu, detalhes, mídia e formulário. Conferir foco e ordem.
3. No formulário: testar campos vazios, e-mail inválido, mensagem curta e submissão válida. Confirmar aviso e ausência de envio. Repetir sem JavaScript.
4. Testar leitor de tela: landmarks, títulos, cabeçalhos de tabela e rótulos dos campos.
5. Reproduzir o vídeo, ativar/desativar legendas e comparar com a transcrição; abrir o áudio e confirmar a disponibilidade externa.
6. Conferir as fontes e executar validação HTML/CSS com o W3C, corrigindo eventuais mensagens.
7. Em uma máquina com Docker, executar os dois comandos do README. Testar `/`, `/index.html`, demais páginas, `/assets/manejo.mp4` e uma URL inexistente (deve retornar 404).
8. No Railway, selecionar a raiz do repositório, gerar domínio público e verificar healthcheck e páginas. Não adicionar banco.
9. Para Pages, verificar elegibilidade e executar o workflow manual com a origem `src/`.

Os documentos originais de escopo e atividade foram preservados. Esta implementação não altera a data, a equipe ou os objetivos acadêmicos originais.
