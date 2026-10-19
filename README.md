# AgroSustenta

Site acadêmico informativo e educacional sobre **Fertilizantes Sustentáveis: Impactos Ambientais e Sociais e sua Relação com a Eficiência e a Rentabilidade na Produção Agrícola**.

Este README reúne o contexto para o desenvolvimento com o Codex. A referência principal é o [Escopo do Projeto](docs/Escopo_Projeto_Fertilizantes_Sustentaveis_CJM.pdf), especialmente as seções 5, 6 e 12. Os requisitos abaixo descrevem o resultado esperado; não significam que todas as funcionalidades já estejam implementadas.

## 1. Identificação

| Campo | Informação |
| --- | --- |
| Equipe | CJM |
| Instituição | UNICID |
| Disciplina indicada no escopo | Ciência da Computação |
| Professor | Paulo Fratta |
| Data do escopo e da entrega indicada no documento | 21/09/2026 |
| Responsável pela validação do escopo | Marcus Vinicius dos Santos Cruz |

Integrantes:

- João Pedro Liberato de Oliveira.
- Marcus Vinicius dos Santos Cruz.
- Cauã Francisco Gomes da Silva.

## 2. Contexto, objetivo e público

O projeto apresenta o uso de fertilizantes, alternativas sustentáveis e seus impactos ambientais e sociais, relacionando práticas de manejo à eficiência produtiva e à rentabilidade da agricultura brasileira.

O objetivo é reunir conceitos, dados, tabelas, resultados, notícias e iniciativas que ajudem o público geral a compreender o tema. O conteúdo deve considerar o contexto do Brasil e utilizar pesquisas e fontes institucionais sempre que possível.

O público inclui pessoas interessadas em sustentabilidade, agricultura, meio ambiente, inovação e impacto social. Pessoas com deficiência são público prioritário para os recursos de acessibilidade.

Diretrizes de conteúdo e apresentação:

- Português brasileiro, com linguagem clara, educativa e acessível.
- Sustentabilidade e impacto social presentes em todas as páginas.
- Relação entre agricultura, fertilizantes, impactos, eficiência e rentabilidade.
- Fontes identificadas para dados e conteúdos de terceiros; imagens da galeria com legendas e fontes.
- Identidade visual ligada à agricultura, sustentabilidade, meio ambiente e inovação.
- Consistência de cores, tipografia, componentes e navegação entre páginas.

## 3. Tecnologias e ferramentas previstas

| Tecnologia ou ferramenta | Uso |
| --- | --- |
| HTML5 | Estrutura e semântica das páginas |
| CSS3 | Estilização e responsividade |
| JavaScript | Opcional, quando necessário para interação ou validação complementar |
| Git e GitHub | Controle de versão e armazenamento |
| GitHub Projects | Organização e acompanhamento das tarefas |
| GitHub Pages | Publicação demonstrativa prevista no escopo |
| W3C Validator | Apoio à validação do código |

O escopo descreve um site demonstrativo. Não prevê backend, banco de dados, autenticação, comércio eletrônico ou processamento real do formulário. Não introduzir essas funcionalidades ou novas dependências sem uma solicitação específica.

## 4. Páginas e requisitos funcionais

As **dez páginas HTML** devem estar interligadas e acessíveis pelo menu principal.

| Página | Conteúdo e função exigidos |
| --- | --- |
| `index.html` | Resumo do tema, apresentação do projeto e menu principal |
| `sobre.html` | História, missão, visão e valores relacionados à proposta do site |
| `projetos.html` | Projetos e iniciativas de sustentabilidade e impacto social |
| `impacto.html` | Dados, tabelas e resultados relacionados aos impactos e à produção agrícola |
| `acessibilidade.html` | Medidas de inclusão e recursos de acessibilidade para pessoas com deficiência |
| `galeria.html` | Imagens relacionadas ao tema, com legendas e indicação das fontes |
| `midia.html` | Conteúdo com `<video>`, `<audio>` e `<iframe>` |
| `noticias.html` | Notícias, artigos ou conteúdos em formato de blog sobre o tema |
| `contato.html` | Dados fictícios, formulário com validação HTML5 e identificação da equipe |
| `orcamento_hospedagem.html` | Relatório comparativo de opções de hospedagem e domínio |

A validação HTML5 é obrigatória para o formulário. JavaScript pode complementar a interação quando necessário, sem substituir esse requisito.

## 5. Requisitos não funcionais

| Área | Requisito |
| --- | --- |
| Acessibilidade | Texto alternativo descritivo, contraste adequado, navegação por teclado, suporte a leitores de tela, `lang="pt-BR"` e ARIA quando necessário |
| Responsividade | Adaptação para celular, tablet e desktop |
| Desempenho | Imagens otimizadas, estrutura organizada e código limpo |
| SEO básico | Títulos adequados, meta descrições e hierarquia de headings |
| Sustentabilidade | Conteúdo educativo, otimização de imagens e consideração de hospedagem com menor impacto ambiental quando aplicável |
| Validação | HTML e CSS preparados para validação conforme as orientações da atividade |

## 6. Organização atual do repositório

| Caminho | Finalidade atual |
| --- | --- |
| `README.md` | Contexto geral e orientação para desenvolvimento |
| `Projeto_A2_CJM.code-workspace` | Configuração do workspace do VS Code |
| `src/` | Páginas do site |
| `src/css/style.css` | Estilos existentes |
| `docs/Escopo_Projeto_Fertilizantes_Sustentaveis_CJM.pdf` | Documento principal de escopo |
| `docs/ATIVIDADE A2 PROJETO DE SITE FRONTEND.txt` | Orientações da atividade |
| `docs/orcamento_hospedagem.html` | Localização atual da página de orçamento |
| `docs/evidencias/` | Evidências do projeto |
| `docs/README.md` | Arquivo de documentação existente, ainda vazio |

Para visualizar a implementação atual, abra `src/index.html` em um navegador ou sirva a pasta `src/` com um servidor estático. A estrutura atual não exige instalação de pacotes ou etapa de build.

**Atenção aos caminhos:** a página de orçamento está em `docs/`, enquanto as demais páginas estão em `src/`. Em uma tarefa futura de implementação, será necessário integrá-la à navegação e conferir seus caminhos relativos. Esta atualização do README não move arquivos nem altera links do site.

A publicação no GitHub Pages é um requisito do escopo, mas não foi validada nesta revisão. Como a entrada está em `src/index.html`, conferir a configuração de publicação e a pasta efetivamente publicada antes de considerar o site disponível.

## 7. Estado observado nesta atualização

A conferência do repositório identificou:

- `src/index.html` contém a página inicial e `src/css/style.css` contém estilos.
- `src/acessibilidade.html` possui apenas uma estrutura HTML inicial, sem conteúdo; usa `lang="en"`, que deverá ser ajustado em uma tarefa de implementação.
- As outras sete páginas em `src/` e a página de orçamento em `docs/` estão vazias.
- O menu atual da página inicial não inclui orçamento e hospedagem.
- `docs/README.md` está vazio.

A existência dos arquivos não comprova o atendimento aos requisitos. O site ainda precisa de implementação e validação. Esta lista é um retrato da revisão que originou este README; o Codex deve conferir novamente os arquivos antes de iniciar cada tarefa.

## 8. Divisão de responsabilidades

A divisão do escopo indica responsáveis principais e permite colaboração entre os integrantes.

| Responsável | Atuação principal | Páginas |
| --- | --- | --- |
| João Pedro Liberato de Oliveira | Desenvolvimento e organização do conteúdo | `index.html`, `sobre.html`, `projetos.html` |
| Marcus Vinicius dos Santos Cruz | Desenvolvimento, acessibilidade e integração | `impacto.html`, `acessibilidade.html`, `contato.html` |
| Cauã Francisco Gomes da Silva | Desenvolvimento e conteúdo multimídia | `galeria.html`, `midia.html`, `noticias.html`, `orcamento_hospedagem.html` |

O acompanhamento deve utilizar GitHub Projects e o controle de versão do GitHub. O documento não apresenta um cronograma detalhado de etapas além da data indicada para o escopo.

## 9. Critérios de aceitação

Checklist dos requisitos a verificar antes de considerar o projeto concluído. Os itens não estão marcados porque esta revisão documental não certifica sua implementação.

- [ ] Dez páginas HTML implementadas, interligadas e navegáveis pelo menu principal.
- [ ] Sustentabilidade e impacto social abordados em todas as páginas.
- [ ] Formulário de contato com validação HTML5.
- [ ] Vídeo, áudio e iframe presentes e funcionais.
- [ ] Acessibilidade: alt descritivo, contraste, teclado, leitores de tela, `lang="pt-BR"` e ARIA quando necessário.
- [ ] Layout responsivo em celular, tablet e desktop.
- [ ] Galeria com imagens, legendas e fontes.
- [ ] Página de impacto com dados, tabelas e resultados.
- [ ] Comparativo de hospedagem e domínio.
- [ ] Código organizado e preparado para validação no W3C Validator.
- [ ] Projeto versionado e organizado para publicação demonstrativa no GitHub Pages.
- [ ] Documentação e arquivos de entrega organizados conforme a atividade.
- [ ] Critérios da atividade revisados: estrutura, semântica, formulário, multimídia, navegação, acessibilidade, sustentabilidade, criatividade, documentação e orçamento.

## 10. Orientações para trabalhos com o Codex

As orientações desta seção organizam o fluxo de desenvolvimento; não acrescentam funcionalidades ao escopo.

1. Ler este README, o PDF de escopo e as orientações da atividade antes de implementar.
2. Conferir o estado real dos arquivos e identificar quais requisitos a tarefa solicitada atende.
3. Trabalhar somente no escopo autorizado pelo usuário, preservando arquivos e conteúdo fora da tarefa.
4. Manter a base HTML5/CSS3 e utilizar JavaScript apenas quando necessário. Não adicionar frameworks ou ferramentas de build sem necessidade acordada.
5. Preservar os caminhos relativos ou ajustar todas as referências afetadas quando uma reorganização for autorizada.
6. Usar conteúdo coerente com o tema e fontes verificáveis. Não inventar pesquisas, estatísticas, referências ou resultados de validação.
7. Conferir a navegação, o formulário, a responsividade, a acessibilidade e os recursos afetados por cada alteração.
8. Informar o que mudou, o que foi validado e quais pendências permanecem. Diferenciar implementação de requisito previsto.
9. Respeitar as instruções da tarefa quanto a commits, envio ao GitHub, merge e publicação. Não interpretar este README como autorização para executar essas ações.

Nesta atualização documental, somente o `README.md` da raiz foi alterado. As pendências descritas não foram implementadas.

## 11. Riscos e limitações do escopo

- Prazo limitado e necessidade de conciliar as atividades dos três integrantes.
- Dificuldades na pesquisa e organização de dados e fontes institucionais.
- Compatibilidade e responsividade em diferentes dispositivos e navegadores.
- Inconsistências de navegação e identidade visual entre páginas.
- Profundidade limitada dos dados por se tratar de uma demonstração acadêmica.
- Dependência de serviços externos para iframe e outros conteúdos multimídia.

## Referências do projeto

- [Escopo do Projeto](docs/Escopo_Projeto_Fertilizantes_Sustentaveis_CJM.pdf).
- [Orientações da atividade](docs/ATIVIDADE%20A2%20PROJETO%20DE%20SITE%20FRONTEND.txt).
