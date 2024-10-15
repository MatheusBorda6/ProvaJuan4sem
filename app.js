// Inicialização do servidor
import express from 'express'
// Importar arquivo de rotas
import vagasRouter from './routes/vagasRoutes.js'
import sequelize from './database.js'

try {
    await sequelize.sync();
} catch (err) {
    console.log(err)
}

const app = express()

// Permitir que a API receba JSON (substitui o body-parser)
app.use(express.json())
app.use(vagasRouter)

app.listen(3000, () => console.log('Servidor rodando'))