import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

// 1. CRIAR USUÁRIO
app.post('/usuarios', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: parseInt(req.body.age),
        }
    })
    res.status(201).json(user) // Retorna o usuário criado com o ID do banco
})

// 2. LISTAR / FILTRAR USUÁRIOS
app.get('/usuarios', async (req, res) => {
    const users = await prisma.user.findMany({
        where: {
            name: req.query.name,
            email: req.query.email,
            age: req.query.age ? parseInt(req.query.age) : undefined,
        }
    })

    res.status(200).json(users)
})

// 3. EDITAR USUÁRIO
app.put('/usuarios/:id', async (req, res) => {
    const updatedUser = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: parseInt(req.body.age),
        }
    })

    // Adicionado o retorno da resposta para não travar a requisição
    res.status(200).json(updatedUser)
})

// 4. DELETAR USUÁRIO
app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id,
        }
    })
    res.status(200).json({ message: 'Usuário deletado com Sucesso!' })
})

app.listen(3000)