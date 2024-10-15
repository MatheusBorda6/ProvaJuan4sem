// Inicialização do servidor
import express from 'express'
// Importar arquivo de rotas
import filmesRouter from './routes/vagasRoutes.js'
import sequelize from './database.js'

const app = express()

// Permitir que a API receba JSON (substitui o body-parser)
app.use(express.json())
app.use(filmesRouter)

app.listen(3000, () => console.log('Servidor rodando'))