# ⏱️ Focus Timer TS

> Gerenciador de tarefas e foco pomodoro desenvolvido com React, TypeScript e persistência local.

![React](https://img.shields.io/badge/React-19.1-blue?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6?logo=typescript&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CSS_Modules-CC6699?logo=sass&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📌 Sobre o Projeto

O **Focus Timer TS** é uma aplicação web focada em produtividade pessoal baseada na técnica Pomodoro. O usuário pode cadastrar metas e sessões de estudo/trabalho com tempos customizados, selecionar a tarefa ativa e disparar o cronômetro regressivo com persistência de estado.

### 🚀 Diferenciais & Melhorias Implementadas:
- **Persistência Local (`localStorage`):** Suas tarefas não são perdidas ao atualizar ou fechar o navegador.
- **Tipagem Estrita com TypeScript:** Interfaces dedicadas para tarefas, tipagem de props e estados.
- **Estilização com CSS Modules & Sass:** Escopo isolado de estilização para prevenir conflitos de classes e melhor manutenção.
- **Algoritmo de Conversão de Tempo:** Tratamento e formatação de segundos para formato relógio `HH:MM:SS`.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/)**: Biblioteca component-based para interface de usuário.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset JavaScript com tipagem estática defensiva.
- **[Sass (SCSS)](https://sass-lang.com/)**: Pré-processador CSS com modularização via CSS Modules.
- **[UUID](https://github.com/uuidjs/uuid)**: Geração de identificadores únicos universais para cada item de estudo.

---

## 📂 Estrutura do Projeto

```bash
src/
├── assets/          # Ícones e recursos visuais
├── common/          # Funções utilitárias (conversor de tempo)
├── components/      # Componentes modulares (Form, List, Item, Stopwatch, Button)
├── pages/           # Visualização principal (App)
├── types/           # Interfaces TypeScript compartilhadas
└── index.tsx        # Ponto de entrada da aplicação
```

---

## 💻 Como Executar Localmente

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/GabrielLudu/focus-timer-ts.git
   cd focus-timer-ts
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie a aplicação:**
   ```bash
   npm start
   ```

4. Acesse no navegador:
   ```
   http://localhost:3000
   ```

---

## 📝 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais detalhes.

---
Desenvolvido por [Gabriel Luduvice](https://github.com/GabrielLudu).
