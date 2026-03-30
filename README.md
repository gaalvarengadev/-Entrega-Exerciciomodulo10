# Módulo 10 — Refatoração com POO, Módulos ES6 e Programação Funcional

## 📋 Objetivo

Refatorar a aplicação desenvolvida anteriormente, aplicando as técnicas aprendidas para melhorar a organização, reutilização e legibilidade do código.

---

## 🗂️ Estrutura do Projeto

```
project/
│
├── index.html          # Interface da aplicação
│
└── /js/
    ├── classes.js      # Definição das classes
    ├── utils.js        # Funções auxiliares
    └── app.js          # Código principal
│
└── styles.css          # (opcional) Estilos básicos para a aplicação
```

---

## ✅ Refatorações Necessárias

### 1. 🔵 Manter Programação Orientada a Objetos (POO)
Manter e organizar o código utilizando classes e princípios de orientação a objetos.

### 2. 🟣 Separar Código em Módulos (ES Modules)
- Criar arquivos `classes.js`, `utils.js` e `app.js`
- Garantir que cada um tenha uma responsabilidade específica
- Utilizar `import/export` para organizar as funcionalidades

### 3. 🟠 Aplicar Técnicas de Programação Funcional
- Utilizar métodos como `map()`, `find()` e `reduce()`
- Criar funções puras sempre que possível

### 4. 🟡 Melhorar Manipulação do DOM
- Utilizar `addEventListener()` para capturar eventos sem usar eventos direto no HTML

### 5. 🔴 Validar Entradas e Melhorar Experiência do Usuário
- Garantir que a interface seja dinâmica, atualizando os valores sem precisar recarregar a página

---

## 💡 Dicas

- Use o código da atividade anterior como base para a refatoração
- Consulte os exemplos de `map()`, `reduce()` e `find()` vistos em aula
- Utilize `console.log()` para testar os métodos antes de integrá-los à interface

---

## 📦 Entrega

- Compartilhe o link do repositório no campo de entrega da plataforma EBAC
- A nota mínima para aprovação é **70**
- O tutor irá corrigir a tarefa em até **2 dias úteis**

---

## 🚀 Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd nome-do-repositorio
   ```

3. Abra o arquivo `index.html` no navegador ou utilize uma extensão como **Live Server** no VS Code.

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
  - Classes (POO)
  - ES Modules (`import/export`)
  - Métodos funcionais (`map`, `filter`, `find`, `reduce`)
  - Manipulação de DOM com `addEventListener`
