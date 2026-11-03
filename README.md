# Around the U.S. — Backend (Express + MongoDB)

## Descrição do projeto

Este repositório contém o Back-end do projeto **Around the U.S. (EUA Afora)**, desenvolvido durante o Bootcamp de Desenvolvimento Web da TripleTen.

O projeto implementa uma API RESTful própria, utilizando Node.js e Express.js, integrada a um banco de dados MongoDB por meio do Mongoose.

A aplicação permite gerenciar usuários e cartões, oferecendo operações de criação, consulta, atualização, exclusão e gerenciamento de curtidas. Os dados são persistidos no MongoDB, substituindo o armazenamento inicial em arquivos JSON.

## Funcionalidades implementadas

### API e gerenciamento de usuários

- Criação e consulta de usuários.
- Consulta de usuários por ID.
- Atualização do perfil do usuário.
- Atualização do avatar do usuário.

### Gerenciamento de cartões

- Criação de novos cartões.
- Consulta de cartões.
- Exclusão de cartões.
- Adição e remoção de curtidas.
- Prevenção de curtidas duplicadas.

### Validação e tratamento de erros

- Validação de dados utilizando Mongoose.
- Validação de URLs por expressão regular.
- Tratamento de erros HTTP 400, 404 e 500.
- Tratamento de registros inexistentes utilizando `orFail()`.
- Operadores MongoDB `$addToSet` e `$pull`.

### Organização da aplicação

- Separação de responsabilidades entre routes, controllers e models.
- Utilização de Express Router.
- Middleware temporário para identificação do usuário por meio de `req.user`.

## Tecnologias e ferramentas

- **Node.js:** ambiente de execução JavaScript no servidor.
- **Express.js:** framework para criação do servidor e das rotas.
- **MongoDB:** banco de dados NoSQL.
- **Mongoose:** modelagem e interação com o banco de dados.
- **Nodemon:** reinicialização automática do servidor durante o desenvolvimento.
- **ESLint:** análise e padronização do código.
- **EditorConfig:** padronização do estilo dos arquivos.
- **REST API:** arquitetura de comunicação entre aplicações.

## Estrutura do projeto

```text
web_project_around_express/
├── controllers/
│   ├── cards.js
│   └── users.js
├── models/
│   ├── card.js
│   └── user.js
├── routes/
│   ├── cards.js
│   └── users.js
├── app.js
├── package.json
├── package-lock.json
├── .editorconfig
├── .eslintrc
├── .gitignore
└── README.md
```

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/ericdoouro/web_project_around_express.git
```

### 2. Entre na pasta do projeto

```bash
cd web_project_around_express
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor

```bash
npm run start
```

Para executar em modo de desenvolvimento:

```bash
npm run dev
```

O servidor estará disponível em:

`http://localhost:3000`

### 5. Verifique o código

```bash
npm run lint
```

## Status do projeto

Projeto desenvolvido durante o Bootcamp de Desenvolvimento Web da TripleTen, com implementação de uma API RESTful, integração com MongoDB e organização do Back-end utilizando Node.js, Express.js e Mongoose.
