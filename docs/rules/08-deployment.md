# 08 — Railway, Docker e GitHub Pages

**Obrigatório**
- Preserve publicação estática via Nginx do `Dockerfile`, com `src/` copiada para a raiz web, configuração em `deploy/default.conf.template` e `railway.toml` apontando para o Dockerfile.
- Para Railway, mantenha a raiz do **repositório** como diretório de build, variável `PORT` e healthcheck em `/index.html`. Não acrescente banco, servidor de aplicação ou comandos de build de frontend.
- Preserve a publicação manual `workflow_dispatch` do GitHub Pages em `.github/workflows/pages.yml`, publicando somente `src/`; não torne publicação automática sem aprovação.
- Não configure, execute, publique, exponha secrets ou contrate serviços sem autorização específica. Criar código de infraestrutura não autoriza fazer deploy.
- Considere os limites de disponibilidade do Pages em repositório privado e o caráter variável de preços de hospedagem.
- Alterações de configuração exigem validação de sintaxe e, quando possível, teste local com Docker e revisão dos caminhos relativos.

**Verificação:** registre testes de configuração e explicite se nenhum deploy ou teste real de infraestrutura ocorreu.
