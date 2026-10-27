# Instruções para agentes — AgroSustenta

Este arquivo é a entrada principal para Codex e outros agentes que atuem neste repositório. Siga primeiro as instruções explícitas da tarefa e as políticas aplicáveis; estas regras não concedem permissão para modificar código, histórico ou infraestrutura.

## Contexto obrigatório
- Projeto acadêmico informativo da equipe CJM (UNICID), sobre fertilizantes sustentáveis, impactos ambientais e sociais, eficiência e rentabilidade agrícola.
- Aplicação estática em HTML5 e CSS3, com JavaScript mínimo, sem backend, banco de dados, framework, gerenciador de pacotes ou build de frontend.
- Dez páginas principais em `src/`; documentação em `docs/`. `src/assets/quadro.html` é apenas recurso interno de iframe.
- Antes de trabalhar, consulte `README.md`, `docs/README.md` e, conforme a tarefa, `docs/Escopo_Projeto_Fertilizantes_Sustentaveis_CJM.pdf`, `docs/ATIVIDADE A2 PROJETO DE SITE FRONTEND.txt`, `docs/FONTES.md` e `docs/VALIDACAO.md`.
- Os documentos acadêmicos originais e as evidências existentes devem ser preservados.

## Fluxo obrigatório
1. Entenda exatamente o pedido, as autorizações e os arquivos impactados; consulte as regras temáticas abaixo.
2. Em pedidos somente de análise, planejamento, revisão ou leitura: **não altere arquivos, branches, issues ou configurações**.
3. Em pedidos de implementação, limite as mudanças ao escopo autorizado e preserve a arquitetura existente. Não altere arquivos correlatos sem necessidade.
4. Verifique alterações com testes proporcionais; se uma ferramenta estiver indisponível, registre explicitamente o limite, sem afirmar que o teste passou.
5. Relate arquivos alterados, justificativas, verificações realizadas, pendências e riscos.
6. **Commit, push, criação de PR, merge, release e deploy exigem autorização explícita para cada tipo de operação.** Autorização para implementar não implica autorização para publicar ou fazer merge. Se houver autorização para PR mas não para merge, pare no PR.

## Regras temáticas
Leia a regra pertinente antes de atuar. A ordem de precedência em caso de conflito é: instruções explícitas autorizadas da tarefa e políticas aplicáveis; requisitos acadêmicos originais; README e documentação factual atual; estas regras complementares. Aponte qualquer conflito antes de decidir — não ignore requisitos.
- [01 — Escopo](docs/rules/01-project-scope.md)
- [02 — Arquitetura](docs/rules/02-architecture.md)
- [03 — Frontend](docs/rules/03-frontend.md)
- [04 — Acessibilidade](docs/rules/04-accessibility.md)
- [05 — Conteúdo e fontes](docs/rules/05-content-and-sources.md)
- [06 — Testes](docs/rules/06-testing.md)
- [07 — Fluxo Git](docs/rules/07-git-workflow.md)
- [08 — Publicação](docs/rules/08-deployment.md)
- [09 — Governança de agentes](docs/rules/09-ai-agent-governance.md)
