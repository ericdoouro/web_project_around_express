# Around the U.S. — Backend (Express)

## Descrição do projeto

Este repositório contém o **back-end** do projeto "Around the U.S." ("EUA Afora"), que evolui a partir do projeto front-end original.

O projeto front-end consiste em um perfil de usuário com layout responsivo, desenvolvido em HTML, CSS e JavaScript, com integração a APIs. A interface se adapta automaticamente a diferentes tamanhos de tela (como celulares e tablets) por meio de Media Queries, garantindo uma boa experiência em qualquer dispositivo. A página simula um perfil de usuário com funcionalidades completas, incluindo edição de dados, adição de cards com imagens, curtidas e visualização em tela cheia, com navegação fluida por meio de popups dinâmicos que podem ser fechados pelo botão, por clique fora da área ativa, ou pela tecla Esc.

Agora, com o desenvolvimento deste back-end, o projeto passa a ter seu próprio servidor, responsável por fornecer os dados de usuários e cards através de uma API própria — substituindo a dependência da API externa usada anteriormente no curso de front-end. Esse servidor é a base para as próximas etapas do projeto, que incluirão conexão com banco de dados, autenticação de usuários e segurança.

## Funcionalidades implementadas

**No front-end:**
- Edição de Perfil — alterar nome e ocupação
- Criação de Cards — adicionar novos cards com imagem e título
- Curtidas — sistema de likes com feedback visual
- Visualização de Imagem — ampliar imagens em popup
- Fechamento Inteligente de Popups — via botão, clique externo ou tecla Esc
- Mensagens de Erro — validações com destaque visual e feedback amigável
- Popup de Confirmação — garantia de alterações antes da aplicação
- Layout responsivo adaptado a múltiplos dispositivos (barra superior ocupando 100% da largura em telas pequenas, reorganização em colunas verticais abaixo de 800px)

**No back-end (este repositório):**
- Rota para retornar a lista completa de usuários
- Rota para retornar a lista completa de cards
- Rota para retornar os dados de um usuário específico a partir do seu ID
- Tratamento de erro 404 para rota inexistente
- Tratamento de erro 404 para ID de usuário não encontrado
- Tratamento de erro 500 para falhas internas do servidor (ex: erro na leitura dos arquivos de dados)

Os dados de usuários e cards são lidos a partir de arquivos JSON locais, como solução temporária até a implementação de um banco de dados real nos próximos sprints.

## Tecnologias e técnicas utilizadas

**Front-end:**
- HTML5
- CSS3 (com Media Queries)
- JavaScript (ES6+)
- Validate.js
- APIs integradas

**Back-end:**
- Node.js — ambiente de execução JavaScript no servidor
- Express.js — framework para criação do servidor e das rotas da API
- Nodemon — reinicialização automática do servidor durante o desenvolvimento (hot reload)
- ESLint — linter configurado com o guia de estilo do Airbnb (`airbnb-base`), garantindo consistência e qualidade do código
- EditorConfig — padronização de estilo de código entre diferentes editores
- Módulo `fs` — leitura assíncrona dos arquivos de dados JSON
- Módulo `path` — construção de caminhos de arquivos de forma confiável entre sistemas operacionais
- Arquitetura modular com separação de rotas (`routes/`) e dados (`data/`)

## Rotas disponíveis

| Método | Rota | Descrição |
|---|---|---|
| GET | `/users` | Retorna a lista de todos os usuários |
| GET | `/cards` | Retorna a lista de todos os cards |
| GET | `/users/:id` | Retorna os dados de um usuário específico |

**Respostas de erro:**

| Status | Situação | Mensagem |
|---|---|---|
| 404 | ID de usuário não encontrado | `{ "message": "ID do usuário não encontrado" }` |
| 404 | Rota inexistente | `{ "message": "Recurso requisitado não encontrado" }` |
| 500 | Erro interno do servidor | `{ "message": "Ocorreu um erro no servidor" }` |

## Como usar

Clone o repositório:

```bash
git clone https://github.com/ericdoouro/web_project_around_express.git
```

Instale as dependências:

```bash
npm install
```

Para rodar o servidor:

```bash
npm run start
```

Para rodar o servidor com hot reload (desenvolvimento):

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`.

Para rodar o linter:

```bash
npm run lint
```
