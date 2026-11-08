# Objetivos alcançados e critérios de aceitação

Revisão: 06/11/2026. Referências: seções 3 e 12 do [escopo original](Escopo_Projeto_Fertilizantes_Sustentaveis_CJM.pdf), [roteiro da segunda entrega](requisitos/roteiro_segunda_entrega.pdf) e [rubrica](requisitos/rubrica_segunda_entrega.xlsx). Este documento demonstra a relação entre o planejado e o entregue para o critério 7; não atribui nota nem substitui a avaliação do professor.

## Objetivo geral

Desenvolver um site informativo e educacional sobre fertilizantes sustentáveis, apresentando seus impactos ambientais e sociais e sua relação com a eficiência e a rentabilidade da produção agrícola no Brasil.

**Resultado alcançado:** o AgroSustenta disponibiliza dez páginas interligadas, em português, com conceitos, impactos, indicadores, comparação econômica didática, iniciativas, notícias e mídias. O conteúdo inclui fontes e recursos de acessibilidade. O resultado é um produto educativo: não representa uma ONG em operação nem comprova melhoria de produtividade, rentabilidade ou impacto ambiental no campo.

## Objetivos específicos: planejado × entregue

| Objetivo do escopo | Entrega que demonstra o objetivo | Como conferir e resultado |
| --- | --- | --- |
| 1. Apresentar conceitos e informações sobre fertilizantes sustentáveis e sua utilização na produção agrícola. | A página Sobre explica práticas de manejo e conceitos; as mídias complementam a leitura com vídeo, áudio e transcrições. | Abrir [Sobre](../src/sobre.html) e [Mídia](../src/midia.html), localizar as explicações e suas fontes. **Atendido como conteúdo educativo.** |
| 2. Informar sobre impactos ambientais e sociais relacionados ao uso de fertilizantes e às práticas agrícolas sustentáveis. | A página Impacto relaciona o tema ao solo, à água, à produção e às pessoas; Sobre apresenta a ligação com os ODS. | Ler [Impacto](../src/impacto.html) e [Sobre](../src/sobre.html), conferindo as referências em [Fontes](FONTES.md). **Atendido como informação, sem alegação de resultados de campo próprios.** |
| 3. Apresentar dados, tabelas e resultados que auxiliem a compreensão da relação entre sustentabilidade, eficiência e rentabilidade. | Impacto contém uma tabela de indicadores com fontes e períodos e uma comparação fictícia por hectare, identificada como exemplo. | Conferir títulos, fontes e identificação da simulação em [Impacto](../src/impacto.html). **Atendido: dados de referência e exemplo didático estão diferenciados.** A simulação não é um experimento agrícola nem uma previsão de lucro. |
| 4. Divulgar projetos, iniciativas, notícias e conteúdos relacionados à sustentabilidade no setor agrícola. | Projetos reúne iniciativas e formas de apoio; Notícias apresenta conteúdo contextualizado e referências; Galeria e Mídia ampliam os formatos disponíveis. | Navegar por [Projetos](../src/projetos.html), [Notícias](../src/noticias.html), [Galeria](../src/galeria.html) e [Mídia](../src/midia.html). **Atendido como divulgação educativa.** Contato e voluntariado são demonstrativos. |
| 5. Aplicar recursos de acessibilidade, responsividade, navegação e semântica HTML5 conforme os requisitos da atividade. | HTML semântico, navegação compartilhada, link de salto, foco visível, descrições de imagens, contraste, ampliação de texto, mensagens de formulário, legendas, transcrições e VLibras sob demanda. | Os relatórios registram zero erros de HTML/CSS, testes em diferentes larguras, 369 controles alcançados por Tab e 20 auditorias automáticas sem violações detectadas. **Implementado e verificado nos cenários registrados** em [Validação](VALIDACAO.md) e [Acessibilidade](ACESSIBILIDADE.md). Isso não equivale a certificação WCAG; leitor de tela e qualidade da tradução em Libras não foram homologados. |

## Aceite do produto entregue

Os itens abaixo retomam os requisitos do escopo e as funções acrescentadas pela segunda entrega. As evidências são da revisão de 06/11/2026; o código publicado conferido corresponde à versão `b932ab5`.

| Requisito planejado | Resultado entregue | Evidência de conferência |
| --- | --- | --- |
| Dez páginas HTML interligadas e navegáveis. | Início, Sobre, Projetos, Impacto, Galeria, Mídia, Notícias, Contato, Acessibilidade e Orçamento. O quadro incorporado é um HTML auxiliar, sem entrar na contagem das dez páginas. | [Estrutura](evidencias/2026-11-06/estrutura.json): dez páginas principais, zero destinos/âncoras locais ausentes e zero IDs repetidos. [Publicação](evidencias/2026-11-06-publicacao/publicacao.json): dez páginas com resposta 200. |
| Conteúdo de sustentabilidade e impacto social. | Conteúdo temático nas páginas, relação com ODS e formas de participação; a página de orçamento trata da viabilidade da publicação do projeto. | [Fontes](FONTES.md) e páginas Sobre, Impacto e Projetos. |
| Formulário HTML5 e interações de JavaScript da segunda entrega. | Validação, prevenção do envio real, mensagens e indicação de erros, confirmação demonstrativa, rascunho em localStorage e botão para apagá-lo. | [Testes do formulário](evidencias/2026-11-06-acessibilidade/navegador.json) e [conferência online](evidencias/2026-11-06-publicacao/publicacao.json). O formulário não transmite mensagens nem cadastra voluntários de verdade. |
| Vídeo, áudio, iframe e alternativas de acesso ao conteúdo. | Vídeo com legendas e transcrição, áudio local com transcrição e quadro incorporado. | [Mídia](../src/midia.html) e [testes de reprodução](evidencias/2026-11-06/navegador.json); carregamento online registrado na evidência de publicação. |
| Acessibilidade e layout responsivo. | Recursos de leitura e teclado nas dez páginas, além de adaptação a celular, tablet e computador. | [Validação](VALIDACAO.md), [teclado e contraste](evidencias/2026-11-06-acessibilidade/teclado-contraste.json) e [auditorias automáticas](evidencias/2026-11-06-acessibilidade/axe.json), com limites descritos em [Acessibilidade](ACESSIBILIDADE.md). |
| Galeria com imagens, legendas e fontes; tabelas com dados e resultados. | Galeria com descrições e créditos; Impacto com indicadores referenciados e comparação fictícia identificada. | [Galeria](../src/galeria.html), [Impacto](../src/impacto.html) e [Fontes](FONTES.md). |
| Orçamento comparativo de hospedagem e domínio. | Página de orçamento preservada como comparação histórica; GitHub Pages identificado como serviço efetivamente adotado. | [Orçamento](../src/orcamento_hospedagem.html) e [registro de publicação](PUBLICACAO.md). O cenário histórico do Railway não representa a hospedagem adotada. |
| Código organizado e validado. | HTML, CSS compartilhado e dois scripts externos, mantendo a proposta de HTML, CSS e JS básico. | [HTML](evidencias/2026-11-06-acessibilidade/html.json) e [CSS](evidencias/2026-11-06-acessibilidade/css.json): zero erros; [Validação](VALIDACAO.md) registra sintaxe e testes no navegador. |
| Documentação organizada e evolução registrada. | Escopo original preservado, complemento de escopo, fontes, diário, uso de IA, melhorias e registros de testes. | [Índice da documentação](README.md), [Diário](DIARIO_DE_BORDO.md), [Uso de IA](USO_DE_IA.md) e [Melhorias](MELHORIAS_MVP.md). Os limites de comprovação permanecem explícitos nesses registros. |
| Publicação demonstrativa com HTTPS — critério 5 da rubrica. | **Endereço oficial: [AgroSustenta no GitHub Pages](https://marcuss9.github.io/U-UNICID-ADS-CC-ENG-FRONTEND-2260022-N7-2-2026-NT-AgroSustenta/).** Dez páginas e recursos principais acessíveis sem login. | [Registro de publicação e justificativa do serviço](PUBLICACAO.md) e [seis verificações online aprovadas](evidencias/2026-11-06-publicacao/publicacao.json). Railway é opcional conforme orientação do responsável. |

## Publicação e acesso ao repositório

O endereço oficial para visitar e demonstrar o site é o GitHub Pages acima. **Em 08/11/2026, o repositório está público**, permitindo acesso à equipe e ao professor sem convite. Repositório público não é uma exigência acadêmica geral: o requisito é oferecer ao professor acesso ao código.

A escolha do GitHub Pages é documentada em PUBLICACAO.md e detalhada em `src/orcamento_hospedagem.html`: o site usa HTML/CSS/JS estáticos e, nesta configuração com domínio github.io e repositório público, não exige contratação de hospedagem ou domínio próprio. Se a visibilidade ou o plano mudar, revisar as condições do Pages e conferir a URL HTTPS novamente.

## Limites desta conclusão

Os cinco objetivos específicos têm entregas identificáveis e evidências correspondentes. O atendimento aqui demonstrado se refere ao site educativo e aos testes registrados, sem prometer nota máxima em todos os critérios.

Participação individual no histórico Git, dados da equipe, comprovação de atendimento a eventual feedback formal do professor e apresentação têm avaliação própria. Este documento não os declara resolvidos pela existência das páginas. A revisão não altera os PDFs nem acrescenta funcionalidades ao projeto.
