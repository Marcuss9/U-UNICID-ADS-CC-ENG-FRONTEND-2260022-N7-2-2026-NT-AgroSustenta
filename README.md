# AgroSustenta

Site acadêmico de Ciência da Computação da UNICID sobre fertilizantes sustentáveis, seus impactos ambientais e sociais e a relação com eficiência e rentabilidade agrícola.

HTML5, CSS3 e JavaScript básico, sem framework, build, banco ou servidor de aplicação. Dez páginas em `src/`, documentação em `docs/` e comentários curtos nos scripts.

## Equipe

- João Pedro Liberato de Oliveira.
- Marcus Vinicius dos Santos Cruz.
- Cauã Francisco Gomes da Silva.

Equipe CJM. Professor Paulo Fratta. Os RAs devem ser preenchidos no modelo [integrantes_equipe.txt](integrantes_equipe.txt) antes do envio no Blackboard. Como o repositório é público, recomenda-se preencher os números de matrícula somente na cópia enviada ao professor.

## Links e estado da entrega

- Repositório: https://github.com/Marcuss9/U-UNICID-ADS-CC-ENG-FRONTEND-2260022-N7-2-2026-NT-AgroSustenta
- Site publicado: [https://marcuss9.github.io/U-UNICID-ADS-CC-ENG-FRONTEND-2260022-N7-2-2026-NT-AgroSustenta/](https://marcuss9.github.io/U-UNICID-ADS-CC-ENG-FRONTEND-2260022-N7-2-2026-NT-AgroSustenta/)
- Hospedagem: GitHub Pages, com HTTPS e acesso sem login, conferido em 06/11/2026.
- Revisão local: 06/11/2026, a partir do commit `55ef626b6f7029bf23289a7f799b54574b6f1a57` da branch main.
- Apresentação e slides: ainda serão preparados pela equipe. Cauã planeja adicionar o PDF em commit próprio; isso ainda não foi comprovado no histórico.

## Executar

Abra `src/index.html` no navegador. Para testar mídia, rascunho e navegação em uma origem HTTP, sirva `src/` com um servidor estático, por exemplo:

```sh
python3 -m http.server 8080 --directory src
```

Acesse `http://localhost:8080`. Python serve apenas para a prévia; não faz parte do site.

## Páginas

| Arquivo | Conteúdo |
| --- | --- |
| index.html | Apresentação e caminhos de leitura |
| sobre.html | Proposta, conceitos e relação com ODS 2, 12 e 15 |
| projetos.html | Iniciativas e formas de apoio, com voluntariado simulado |
| impacto.html | Dados com fontes e comparação econômica simulada |
| acessibilidade.html | Como usar teclado, contraste, texto ampliado e Libras |
| galeria.html | Fotos com legendas e créditos |
| midia.html | Vídeo legendado, áudio local com transcrição e iframe |
| noticias.html | Notícia institucional e leituras da equipe |
| contato.html | Formulário demonstrativo e equipe |
| orcamento_hospedagem.html | Comparativo e orientação de hospedagem |

`src/assets/quadro.html` é um recurso do iframe, fora da contagem das dez páginas principais.

## Interações simples

- `js/contato.js`: valida os campos, mostra os erros, destaca as bordas e salva/restaura o rascunho pelo localStorage. O botão de apagar remove esse rascunho. A confirmação do usuário não é salva.
- `js/acessibilidade.js`: alterna contraste e tamanho de texto, salva preferências e carrega o VLibras quando solicitado.
- O formulário não envia dados. Use valores fictícios. Sem JavaScript, a validação HTML permanece disponível e os valores não entram na URL, pois os campos não têm atributo name.
- Preferências e rascunho ficam na origem do navegador. Outra hospedagem ou outro navegador não compartilha esses dados. Falhas de armazenamento mostram aviso e não impedem o formulário.

## Acessibilidade e conteúdo

Há foco visível, link de salto, rótulos, mensagens textuais de erro, imagens com alt, mídias sem autoplay e legendas/transcrições. O texto pode ser ampliado em 25% e o alto contraste pode ser alternado no topo de todas as páginas.

O VLibras é carregado do endereço oficial somente após ativação. Depende de internet e de um serviço externo; a tradução automática pode ter limitações. Fonte: [manual oficial](https://vlibras.gov.br/doc/widget/installation/webpageintegration.html).

O vídeo local permanece preservado. A leitura em áudio usa o mesmo texto da transcrição do vídeo, com voz sintética do eSpeak NG. O podcast do MAPA continua como leitura complementar externa. Fontes e créditos: [FONTES](docs/FONTES.md).

O visual existente foi preservado: verde profundo, lavanda e fontes do sistema, com referência editorial AngelList/Refero registrada em FONTES. Simulações não são apresentadas como atividades ou resultados reais.

## Publicação

Railway não é obrigatório. Publique a pasta `src/` em um serviço de arquivos estáticos com HTTPS, sem comando de build. O domínio fornecido pelo serviço é suficiente; domínio próprio é opcional.

- GitHub Pages: serviço adotado. O repositório é público e o workflow em `.github/workflows/pages.yml` aceita execução manual e publicação quando houver push na main. A última publicação verificada antes desta revisão corresponde à versão b932ab5. O custo atual de hospedagem e domínio próprio é R$ 0/ano.
- Outro serviço estático: usar `src/` como pasta de publicação e conferir todas as rotas e mídias pela URL final.
- Railway: configuração opcional preservada. Nesse caso, usar a raiz do repositório para o Dockerfile, Nginx e variável PORT. Não é necessário acrescentar banco.

O serviço adotado é GitHub Pages: hospeda a pasta src com HTTPS, integra-se ao repositório e dispensa servidor de aplicação. O endereço github.io atende à atividade; não há necessidade de domínio próprio. O Pages oferece hospedagem gratuita para repositórios públicos. A simulação Railway no orçamento permanece como comparação histórica, não como custo da hospedagem adotada. A decisão e os testes online estão em [PUBLICACAO.md](docs/PUBLICACAO.md). A [página de orçamento](src/orcamento_hospedagem.html) agora identifica explicitamente a hospedagem adotada e a alternativa simulada.

## Documentação

Veja [índice de documentos](docs/README.md), [diário](docs/DIARIO_DE_BORDO.md), [melhorias](docs/MELHORIAS_MVP.md), [uso de IA](docs/USO_DE_IA.md), [objetivos e aceite](docs/OBJETIVOS_E_ACEITE.md) e [testes](docs/VALIDACAO.md).

Os arquivos acadêmicos originais foram preservados. O complemento [ESCOPO_FINAL](docs/ESCOPO_FINAL.md) registra os requisitos da segunda entrega e a alteração de hospedagem. Resultados locais não comprovam publicação nem apresentação.

Revisão adicional de acessibilidade: [foco, formulário, iframe e evidências de teclado/contraste](docs/ACESSIBILIDADE.md).
