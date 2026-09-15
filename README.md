# 🚀 API RESTful de Gerenciamento de Usuários

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

API RESTful desenvolvida para gerenciamento de usuários, implementando as principais operações de um **CRUD (Create, Read, Update e Delete)**.

O projeto utiliza **Node.js, Express.js, Prisma ORM e MongoDB Atlas**, com foco na prática de conceitos de desenvolvimento **backend** e construção de APIs REST.

---

## 📌 Funcionalidades

- ✅ **Criar usuário (`POST`)** — Cadastra um novo usuário no banco de dados.
- ✅ **Listar usuários (`GET`)** — Retorna todos os usuários cadastrados.
- ✅ **Filtrar usuários (`GET`)** — Permite realizar buscas utilizando Query Params, como nome, idade e e-mail.
- ✅ **Editar usuário (`PUT`)** — Atualiza os dados de um usuário específico através do ID.
- ✅ **Deletar usuário (`DELETE`)** — Remove um usuário do banco de dados através do ID.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Utilização |
|---|---|
| **Node.js** | Runtime JavaScript |
| **Express.js** | Framework para construção da API |
| **Prisma ORM** | ORM para comunicação com o banco de dados |
| **MongoDB Atlas** | Banco de dados NoSQL em nuvem |
| **Thunder Client / Postman** | Testes e requisições da API |

---

## 🗄️ Modelo de Dados

O banco de dados é estruturado utilizando o **Prisma Schema**:

~~~prisma
model User {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  email String @unique
  name  String
  age   Int
}
~~~

### Campos

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | String | Identificador único do usuário |
| `name` | String | Nome do usuário |
| `email` | String | E-mail do usuário |
| `age` | Int | Idade do usuário |

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de executar o projeto, certifique-se de ter:

- [Node.js](https://nodejs.org/) instalado (versão LTS recomendada)
- Uma conta no [MongoDB Atlas](https://www.mongodb.com/atlas) ou uma instância local do MongoDB

### 1. Clone o repositório

~~~bash
git clone https://github.com/joaopreiss/api-usuarios.git
~~~

Entre na pasta do projeto:

~~~bash
cd api-usuarios
~~~

### 2. Instale as dependências

~~~bash
npm install
~~~

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

~~~env
DATABASE_URL="sua_string_de_conexao_do_mongodb_atlas"
~~~

> ⚠️ **Importante:** não compartilhe sua `DATABASE_URL` publicamente e certifique-se de que o arquivo `.env` esteja incluído no `.gitignore`.

### 4. Gere o Prisma Client

~~~bash
npx prisma generate
~~~

### 5. Inicie o servidor

~~~bash
node --watch server.js
~~~

A aplicação estará disponível em:

~~~text
http://localhost:3000
~~~

---

## 📍 Endpoints da API

### Criar usuário

**POST** `/usuarios`

Cadastra um novo usuário.

Exemplo de corpo da requisição:

~~~json
{
  "name": "João Pedro",
  "email": "joao@email.com",
  "age": 18
}
~~~

### Listar usuários

**GET** `/usuarios`

Retorna todos os usuários cadastrados.

Também é possível realizar filtros utilizando Query Params:

~~~text
GET /usuarios?name=João
~~~

### Atualizar usuário

**PUT** `/usuarios/:id`

Atualiza os dados de um usuário específico utilizando seu ID.

Exemplo:

~~~json
{
  "name": "João Pedro Reis",
  "email": "joao.reis@email.com",
  "age": 19
}
~~~

### Deletar usuário

**DELETE** `/usuarios/:id`

Remove um usuário utilizando seu ID.

---

## 🧪 Testando a API

As requisições podem ser realizadas utilizando ferramentas como:

- **Thunder Client**
- **Postman**

### Exemplo de requisição

~~~http
POST http://localhost:3000/usuarios
~~~

Body:

~~~json
{
  "name": "João Pedro",
  "email": "joao@email.com",
  "age": 18
}
~~~

---

## 👤 Autor

**João Pedro**

Estudante de **Análise e Desenvolvimento de Sistemas**, com foco em desenvolvimento backend e construção de aplicações e APIs.

🔗 [GitHub](https://github.com/joaopreiss)

---

⭐ Se este projeto foi útil ou interessante, considere deixar uma estrela no repositório!