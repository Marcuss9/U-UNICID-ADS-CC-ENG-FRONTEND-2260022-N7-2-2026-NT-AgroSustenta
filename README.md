# AgroSustenta

Site acadêmico informativo sobre **Fertilizantes Sustentáveis: Impactos Ambientais e Sociais e sua Relação com a Eficiência e a Rentabilidade na Produção Agrícola**.

Implementação estática em **HTML5 e CSS3**, sem frameworks, gerenciador de pacotes, build ou backend de aplicação. O único JavaScript (`src/js/contato.js`, 347 bytes) apresenta a confirmação do formulário demonstrativo sem recarregar a página; a validação permanece nativa do HTML5. O site continua navegável sem JavaScript.

## Contexto e escopo

- Equipe CJM · UNICID · Professor Paulo Fratta · Ciência da Computação.
- Integrantes: João Pedro Liberato de Oliveira; Marcus Vinicius dos Santos Cruz; Cauã Francisco Gomes da Silva.
- Documento principal: [Escopo do Projeto](docs/Escopo_Projeto_Fertilizantes_Sustentaveis_CJM.pdf), especialmente seções 5, 6 e 12.
- [Orientações da atividade](docs/ATIVIDADE%20A2%20PROJETO%20DE%20SITE%20FRONTEND.txt).
- Data indicada no escopo original: 21/09/2026. Pesquisa desta implementação: 19/10/2026.
- Público geral interessado em agricultura e sustentabilidade, considerando pessoas com deficiência na apresentação do conteúdo.

## Executar localmente

Abra `src/index.html` no navegador para conhecer as páginas. Para testar também o iframe e as legendas do vídeo sob HTTP, sirva a pasta `src/` com qualquer servidor estático. Exemplo com Python, se já estiver instalado na máquina:

```sh
python3 -m http.server 8080 --directory src
```

Visite `http://localhost:8080`. Python é apenas uma opção de ferramenta local; não faz parte do site nem da imagem de produção. Nenhum pacote precisa ser instalado.

## Dez páginas

| Arquivo em `src/` | Conteúdo |
| --- | --- |
| `index.html` | Apresentação, contexto e caminhos de leitura |
| `sobre.html` | História, missão, visão, valores e conceitos |
| `projetos.html` | Iniciativas reais e oficina fictícia identificada |
| `impacto.html` | Indicadores institucionais e comparação econômica simulada |
| `acessibilidade.html` | Recursos de inclusão, orientações e limites |
| `galeria.html` | Fotografias ilustrativas com legendas, autoria e fontes |
| `midia.html` | Vídeo local com legendas, podcast institucional e iframe local |
| `noticias.html` | Notícia institucional e artigos educativos da equipe |
| `contato.html` | Formulário demonstrativo, contato fictício e integrantes |
| `orcamento_hospedagem.html` | Comparativo de hospedagem/domínio e orçamento simulado |

As dez páginas estão no menu principal e no rodapé. A antiga localização `docs/orcamento_hospedagem.html` contém um link para a página atual. `src/assets/quadro.html` é um recurso interno do iframe, não uma décima primeira página do menu.

## Design e conteúdo

O redesign adapta a linguagem editorial do [AngelList](https://www.angellist.com/) e da [referência AngelList no Refero](https://styles.refero.design/style/6db40006-05ac-4770-b63e-dfd9ebfd534c): tipografia ampla, superfícies planas, verde profundo, lavanda e botões arredondados. A marca, os textos e a composição foram adaptados ao AgroSustenta; não são uma cópia do site de referência. A fonte é do sistema, sem download externo.

Fontes dos dados, período de referência e distinção entre fatos e simulações estão nas páginas e em [Fontes e conteúdo](docs/FONTES.md). Não há resultados de campo atribuídos ao AgroSustenta. Contatos usam o domínio reservado `.example`.

- O vídeo educativo local é gráfico, sem áudio, tem 30 segundos, legendas WebVTT e transcrição integral.
- O áudio é o episódio 24 do Mapacast, carregado sob demanda diretamente do MAPA. A página oferece resumo editorial e link direto; não inclui transcrição integral do episódio.
- O iframe incorpora um quadro educativo local e não depende de um serviço de terceiros.
- As fotos locais WebP são ilustrativas; não demonstram uma técnica agrícola e não são apresentadas como paisagens brasileiras.

## Formulário: demonstração

Campos com `required`, `type="email"`, limites de comprimento e rótulos associados. Não envia e-mail, não salva dados, não faz chamadas de API e não usa armazenamento do navegador. Os campos não têm atributo `name`, de modo que valores não entram na URL nem com JavaScript desligado. O visitante é orientado a usar valores fictícios.

## Railway

A preparação para publicação usa somente **Nginx para servir os arquivos estáticos**. Não há servidor de aplicação, banco, login ou serviço adicional.

1. Crie um projeto no Railway a partir deste repositório e selecione a branch desejada.
2. Mantenha a **raiz do repositório** como Root Directory. Não selecione `src/`.
3. O `railway.toml` seleciona o `Dockerfile`; não configure comandos de instalação, build ou start personalizados.
4. A imagem oficial do Nginx processa `deploy/default.conf.template` na inicialização e escuta em `0.0.0.0:$PORT` (padrão local `8080`). O healthcheck é `/index.html`.
5. Em Networking, gere um domínio público. Confira o menu, as dez páginas, o vídeo e o podcast.

Teste opcional em uma máquina com Docker:

```sh
docker build -t agrosustenta .
docker run --rm -e PORT=8080 -p 8080:8080 agrosustenta
```

Este trabalho **prepara** o deploy: não cria projeto no Railway, não contrata recursos e não publica automaticamente. Preços e condições podem mudar; consulte a [tabela oficial](https://railway.com/pricing).

## GitHub Pages

O escopo original prevê publicação demonstrativa no Pages. O workflow `.github/workflows/pages.yml` é **manual** (`workflow_dispatch`) e publica somente `src/`, sem build.

1. Confira a elegibilidade do plano: o GitHub Free oferece Pages em repositórios públicos; este repositório é privado.
2. Em Settings → Pages, selecione GitHub Actions, se disponível.
3. Execute “Publicar site estático no GitHub Pages” na branch desejada.

Não é necessário mover as páginas para a raiz. Todos os caminhos são relativos, inclusive o iframe e as legendas, para funcionar sob o prefixo do repositório.

## Verificação

Consulte [Validação e pendências](docs/VALIDACAO.md) para os resultados reais e o roteiro de revisão manual. A implementação inclui medidas de acessibilidade; não declara certificação WCAG nem validação W3C que não tenha sido executada.

## Orientações de manutenção

Leia o PDF e confira o estado real dos arquivos antes de editar. Preserve o escopo informativo e a base HTML5/CSS3; use JavaScript apenas para interação indispensável. Não acrescente autenticação, banco, backend, comércio eletrônico ou dependências sem solicitação. Atualize os mesmos componentes nas dez páginas, preserve caminhos relativos e identifique fontes e simulações. Respeite a autorização da tarefa para commits, PRs, merge e publicação; este README não concede autorização para essas ações.
