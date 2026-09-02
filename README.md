# Lab GitHub Flow Demo

Este repositório foi construído como um ambiente de testes e simulação prática para a apresentação universitária sobre **Engenharia de Software, GitHub Flow, Code Review e Integração Contínua**.

---

## 📌 Convenções de Commits (Conventional Commits)

Todas as mensagens de commit devem seguir o padrão:
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Alterações na documentação
- `test:` Adição ou ajuste de testes
- `refactor:` Refatoração de código sem alterar regra de negócio

Exemplo: `feat: adiciona validacao no formulario de login`

---

## 🔄 Fluxo de Trabalho (Workflow)

1. **Issue:** Escolha ou crie um card no GitHub Projects.
2. **Branch:** Crie uma branch a partir da `main` no padrão `feature/nome-da-feature` ou `fix/nome-do-bug`.
3. **Commits:** Faça commits pequenos e descritivos.
4. **Push & Draft PR:** Abra um **Draft Pull Request** para discussões se a tarefa for complexa.
5. **Pull Request:** Quando pronto, altere para **Ready for Review**, preencha o template de PR e vincule a Issue (`Closes #X`).
6. **Code Review & CI:** Aguarde a aprovação do reviewer e o sucesso dos testes do GitHub Actions.
7. **Merge:** Realize o merge conforme a estratégia definida pela equipe (Squash, Merge Commit ou Rebase).