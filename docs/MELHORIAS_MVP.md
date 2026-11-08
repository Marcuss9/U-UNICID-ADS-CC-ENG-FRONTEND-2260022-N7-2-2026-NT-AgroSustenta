# Melhorias em relação à versão anterior

Data: 06/11/2026. Comparação com main no commit 55ef626b, que contém a implementação de 19/10 e as regras de 27/10. O responsável relatou em 08/11/2026 que, na primeira entrega, o professor considerou as páginas em um bom caminho e observou que ainda havia melhorias a realizar. Esse é um relato da equipe, sem documento formal ou transcrição da fala; a lista abaixo registra melhorias verificáveis feitas posteriormente, sem afirmar que cada correção foi exigida especificamente pelo professor.

| Item | Antes | Depois | Evidência |
| --- | --- | --- | --- |
| Formulário | Validação HTML e aviso genérico por JS | Validação JS com mensagens, bordas e foco no primeiro erro | src/js/contato.js; testes de formulário |
| Persistência | Não armazenava dados | Rascunho restaurado ao recarregar; botão de apagar | src/contato.html; testes de armazenamento |
| Contraste e leitura | Somente cores e tamanhos padrão | Alto contraste e texto ampliado com preferências entre páginas | src/js/acessibilidade.js; prints e testes |
| Libras | Não havia integração | VLibras oficial ativado sob demanda | teste de carregamento e tratamento de falha |
| Apoio | Sem área específica | Seção com divulgação, sugestões e voluntariado simulado | projetos.html#apoie |
| ODS | Tema de sustentabilidade sem associação explícita | ODS 2, 12 e 15 explicados com fontes e link em todas as páginas | sobre.html#ods; rodapés |
| HTML da mídia | Fechamentos indevidos de source/track | Elementos vazios sem fechamento | midia.html; relatório HTML |
| Áudio | Podcast externo com resumo parcial | Áudio local com transcrição integral; podcast como link complementar | midia.html; assets/leitura-manejo.mp3 |
| Hospedagem | Instruções concentradas em Railway | GitHub Pages publicado em HTTPS, com custo e justificativa atualizados; Railway como alternativa | README; orçamento; PUBLICACAO.md |
| Documentação | Registro técnico sem diário e tabela de evolução | Diário, uso de IA, escopo final, objetivos e testes organizados | docs/README.md |

## Antes e depois

Os prints em evidencias/2026-11-06/ mostram a versão consultada e a revisada nos mesmos cenários. São comparações reais do código disponível, não evidências retroativas de uma apresentação ou de aprovação do MVP. Consulte VALIDACAO.md para os arquivos efetivamente gerados.

## Situação atual das pendências (08/11/2026)

- **Feedback do MVP:** comentário geral informado pelo responsável, registrado acima. Se existir uma avaliação escrita com apontamentos específicos, a equipe pode anexá-la e indicar a correspondência exata entre cada apontamento e a correção.
- **GitHub:** Marcus e João possuem commits. Cauã pretende adicionar o PDF dos slides em commit próprio; sua participação no histórico ainda depende dessa contribuição real.
- **Publicação:** resolvida e documentada em [PUBLICACAO.md](PUBLICACAO.md). O site está publicado no GitHub Pages com HTTPS, e a página de orçamento agora identifica a opção adotada.
- **Entrega:** RAs, ZIP e slides ainda exigem conclusão pela equipe.


## Complemento de acessibilidade após 6da7993

Foco em duas cores, fundo sólido da legenda, menus com maior área de interação, resumo navegável dos erros e preferências sincronizadas com o iframe. O contraste antes dependente da imagem foi substituído por cores fixas; a sequência de teclado foi conferida nas dez páginas. Veja ACESSIBILIDADE.md e as evidências em evidencias/2026-11-06-acessibilidade/.
