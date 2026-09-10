# 📋 Gerenciador de Tarefas — Sistema de Lista de Tarefas do Programador

**Checkpoint 4 — Web Dev — FIAP**

---

## 📌 Sobre o Projeto

O **Gerenciador de Tarefas** é um sistema de lista de tarefas voltado para programadores, desenvolvido como parte do **Checkpoint 4 da disciplina de Web Dev da FIAP**.

A aplicação permite cadastrar, visualizar, filtrar, concluir e remover tarefas do dia a dia de desenvolvimento, com persistência automática dos dados no navegador através do `localStorage`.

O projeto foi construído com **React + Vite**, utilizando **Tailwind CSS** para a estilização da interface.

---

## 🎯 Objetivo

Aplicar, em grupo, os principais conceitos de desenvolvimento front-end com React, incluindo:

- Componentes funcionais;
- Estrutura de componentes pai e filho;
- Utilização de `import` e `export`;
- Hooks do React (`useState` e `useEffect`);
- Métodos de array (`map` e `filter`);
- Callbacks entre componentes via `props`;
- Persistência de dados com `localStorage`;
- Organização de código e versionamento com Git/GitHub.

---

## ✨ Funcionalidades

- Cadastro de tarefas com **Nome**, **Data**, **Descrição** e **Nível de Prioridade** (Baixa, Média, Alta);
- Marcar tarefa como concluída (checkbox);
- Remover tarefas da lista;
- Filtros rápidos de visualização: **Todas**, **Pendentes**, **Concluídas**;
- Persistência automática dos dados utilizando `localStorage`;
- Interface responsiva estilizada com Tailwind CSS;
- Código comentado nos pontos em que são utilizados Hooks, métodos de array (`filter`/`map`) e callbacks.

---

## ⚛️ Estrutura de Componentes

O componente principal `App.jsx` funciona como componente pai, concentrando os estados (`useState`), o efeito de persistência (`useEffect`) e as funções que são repassadas aos componentes filhos via `props`.

```
App
│
├── Header          → resumo de tarefas concluídas
├── TaskForm         → formulário de cadastro de nova tarefa
├── TaskFilters       → botões de filtro (Todas / Pendentes / Concluídas)
├── TaskList          → percorre as tarefas filtradas com .map()
│   └── TaskItem       → exibe uma tarefa e suas ações (concluir/remover)
│   └── EmptyState      → mensagem exibida quando não há tarefas
└── Footer            → rodapé da aplicação
```

---

## 💾 Utilização do LocalStorage

O projeto utiliza a chave `Gerenciador_de_Tarefas` no `localStorage` do navegador para armazenar a lista de tarefas em formato JSON.

Um `useEffect` observa mudanças no estado das tarefas e salva automaticamente os dados sempre que a lista é alterada (nova tarefa, tarefa concluída ou removida). Ao carregar a aplicação, o estado inicial do `useState` já recupera os dados salvos anteriormente.

---

## 🧩 Métodos de Array Utilizados

- **`.map()`** — usado em `TaskList.jsx` para transformar cada tarefa em um componente `<TaskItem />`, e em `App.jsx` para atualizar o status de uma tarefa específica preservando as demais;
- **`.filter()`** — usado em `App.jsx` para aplicar o filtro selecionado (Todas / Pendentes / Concluídas) e para remover uma tarefa da lista.

---

## 🛠️ Tecnologias Utilizadas

- **React.js** — biblioteca para construção da interface;
- **Vite** — ferramenta de desenvolvimento e build;
- **Tailwind CSS** — estilização utilitária da interface;
- **JavaScript (ES6+)** — lógica e funcionalidades;
- **LocalStorage** — persistência local dos dados;
- **Git / GitHub** — versionamento do código;
- **Visual Studio Code** — ambiente de desenvolvimento.

---

## 📂 Estrutura do Projeto

```
dev-tasks/
│
├── src/
│   │
│   ├── components/
│   │   ├── header/
│   │   │   └── Header.jsx
│   │   ├── taskForm/
│   │   │   └── TaskForm.jsx
│   │   ├── taskFilters/
│   │   │   └── TaskFilters.jsx
│   │   ├── taskList/
│   │   │   └── TaskList.jsx
│   │   ├── taskItem/
│   │   │   └── TaskItem.jsx
│   │   ├── emptyState/
│   │   │   └── EmptyState.jsx
│   │   └── footer/
│   │       └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── integrantes.txt
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## ⚙️ Pré-requisitos

- **Node.js**
- **npm**
- **Git**

---

## 📥 Instalação

**1. Clonar o repositório**

```
git clone <link-do-repositorio>
```

**2. Entrar na pasta do projeto**

```
cd CP4-web
```

**3. Instalar as dependências**

```
npm install
```

---

## ▶️ Executando o Projeto

```
npm run dev
```

O Vite iniciará o servidor de desenvolvimento, normalmente disponível em:

```
http://localhost:5173
```

---

## 👤 Usuários e Senhas

O projeto não possui sistema de autenticação ou login. Não são necessários usuários ou senhas para acessar e testar a aplicação.

---

## 👨‍💻 Integrantes

| Integrante                    | RM     |
| ----------------------------- | ------ |
| **Eduardo Guzeli Nogueira**   | 571143 |
| **Diego Caio de Ulhôa**       | 572190 |
| **Lucas Dos Santos Oliveira** | 571718 |
| **Gabriel Kenzo**             | 569780 |

### 🎓 Instituição

**FIAP — Engenharia de Software**

Projeto desenvolvido para a disciplina de **Web Dev**, sob orientação do Professor **Wellington Cidade Silva**, turma **1ESPH**, como parte do Checkpoint 4.

---

## 🔗 Repositório GitHub

**[🌐 Acessar Projeto](https://cp4-webdev-ten.vercel.app/)**

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e educacionais.
