# 🚀 API RESTful de Gerenciamento de Usuários

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

API RESTful completa desenvolvida para gerenciar o ciclo de vida de usuários (*CRUD*), utilizando a stack moderna de desenvolvimento backend com Node.js, Express, Prisma ORM e banco de dados MongoDB Atlas na nuvem.

---

## 📌 Funcionalidades

- [x] **Criar Usuário (`POST`):** Cadastra um novo usuário no banco de dados.
- [x] **Listar Usuários (`GET`):** Retorna todos os usuários cadastrados.
- [x] **Filtrar Usuários (`GET`):** Permite busca filtrada via *Query Params* (ex: nome, idade, e-mail).
- [x] **Editar Usuário (`PUT`):** Atualiza os dados de um usuário específico identificando pelo ID.
- [x] **Deletar Usuário (`DELETE`):** Remove um usuário do banco de dados pelo ID.

---

## 🛠️ Tecnologias Utilizadas

- **Runtime:** Node.js (ES Modules)
- **Framework Web:** Express.js
- **ORM:** Prisma ORM
- **Banco de Dados:** MongoDB Atlas (NoSQL na nuvem)
- **Testes de API:** Thunder Client / Postman

---

## 🗄️ Modelo de Dados (Prisma Schema)

```prisma
model User {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  email String @unique
  name  String
  age   String
}
```

🚀 Como Executar o Projeto Localmente
Pré-requisitos
Node.js instalado (versão LTS recomendada).

Conta no MongoDB Atlas ou uma instância local do MongoDB.

## Passo a Passo:

## 1. Clone o repositório: git clone [https://github.com/joaopreiss/api-usuarios.git](https://github.com/joaopreiss/api-usuarios.git)
cd api-usuarios

## 2. Instale as dependências: npm install

## 3. Configure as Variáveis de Ambiente: Crie um arquivo .env na raiz do projeto com a seguinte variável: DATABASE_URL="sua_string_de_conexao_do_mongodb_atlas"

## 4. Gerar o Prisma Client: npx prisma generate

## 5.  Inicie o Servidor: node --watch server.js

## A aplicação estará rodando em http://localhost:3000.

## 📍 Endpoints da API

## POST/usuarios Cadastra um novo usuário
## GET/usuarios Lista todos os usuários ou filtra por query (?name=João)
## PUT/usuarios/:id Atualiza os dados de um usuário pelo ID
## DELETE/usuarios/:id Remove um usuário pelo ID

## 👤 Autor
## Desenvolvido por João Pedro 🚀