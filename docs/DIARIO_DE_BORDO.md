# Diário de bordo

Este diário reúne fatos do histórico e a revisão atual. As datas anteriores são recuperadas dos commits, não representam sessões de trabalho adicionais presumidas. Base consultada: main, commit `55ef626b6f7029bf23289a7f799b54574b6f1a57`.

## 19/10/2026 — Organização e implementação

O histórico registra a organização dos arquivos em src e docs, a descrição do escopo no README e a implementação das dez páginas HTML/CSS. O PR #1 foi integrado com a preparação para Railway. A validação daquele momento foi preservada em VALIDACAO_2026-10-19.md e declara seus próprios limites.

Evidência: [PR #1](https://github.com/Marcuss9/U-UNICID-ADS-CC-ENG-FRONTEND-2260022-N7-2-2026-NT-AgroSustenta/pull/1). Há commits atribuídos a Marcus e João. A divisão de tarefas do escopo é planejamento; não comprova por si só a autoria de cada trecho.

Segundo relato do responsável, a base do site foi produzida com um único prompt delimitando escopo, PDF, stack e nível de complexidade. O texto original não está disponível. O registro de IA está em USO_DE_IA.md.

## 27/10/2026 — Regras de manutenção

O PR #2 acrescentou AGENTS.md e nove documentos de regras sobre escopo, organização, interface, acessibilidade, fontes, testes, Git, publicação e governança.

Evidência: [PR #2](https://github.com/Marcuss9/U-UNICID-ADS-CC-ENG-FRONTEND-2260022-N7-2-2026-NT-AgroSustenta/pull/2). Regras de manutenção não substituem requisitos acadêmicos nem comprovam testes ou publicação.

## 06/11/2026 — Auditoria da segunda entrega

O roteiro e a rubrica enviados foram comparados com a branch main. Foram identificados: validação apenas nativa, ausência de localStorage, ausência de apoio e ODS explícitos, fechamentos inválidos de source/track, documentação incompleta da evolução e publicação sem URL comprovada.

Decisão: preservar identidade visual e dez páginas, completando os itens da rubrica com JS simples. Railway deixou de ser tratado como obrigação. Apresentação e chatbot ficaram fora do trabalho a pedido do responsável.

## 06/11/2026 — Correções e documentação

- Formulário: validação em JS, mensagens associadas aos campos, destaque de erros, foco no primeiro erro, rascunho local e botão de apagar.
- Acessibilidade: contraste e texto ampliado com preferências salvas; VLibras oficial sob demanda; navegação nativa preservada sem JS.
- Conteúdo: seção de apoio com participação simulada e relação explicada com ODS 2, 12 e 15, com fontes da ONU.
- Mídia: correção de source/track e áudio educativo local com transcrição integral. O podcast externo permanece como link complementar.
- Documentação: escopo complementar, objetivos e aceite, melhorias, uso de IA, publicação e testes. Não foram inventados registros de prompts originais nem feedback do professor.

Resultados e evidências da verificação desta revisão: VALIDACAO.md. A versão anterior e a revisada são comparadas em MELHORIAS_MVP.md.

## Pendências de equipe e publicação

A equipe deve informar RAs, confirmar a hospedagem/URL e o acesso do professor ao repositório privado. No histórico consultado não foi identificado commit de Cauã; a participação precisa ser registrada por contribuições reais, sem alterar a autoria histórica. A apresentação permanece fora desta revisão.


## 06/11/2026 — Revisão adicional de acessibilidade

A pedido do responsável, foram melhorados foco em fundos diferentes, área de interação dos menus, contraste da legenda, resumo de erros com links e sincronização do iframe com as preferências de leitura. A base desta etapa é o commit 6da7993, já presente na main.

Foram alcançados 369 elementos por teclado nas dez páginas, conferidos os contrastes antes pendentes e executados testes de regressão, HTML/CSS e 20 auditorias automáticas. Evidências e limites em ACESSIBILIDADE.md. O JavaScript foi mantido simples e não foram acrescentadas dependências ao site.
