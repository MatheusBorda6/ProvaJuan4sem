// Importar a conexão do banco de dados
import { Filme } from "../models/Vaga.js"

const criarFilme = async (req, res) => {
    try {
        const { titulo, categoria } = req.body
        if (!titulo || !categoria) {
            // Faltam dados
            return res.status(404).send({ mensagem: 'Favor informar titulo e categoria' })
        }

        // Montar comando de INSERT
        // await conexao.query(`INSERT INTO filmes (titulo, categoria) VALUES ('${titulo}', '${categoria}')`)
        const filme = await Filme.create({ titulo, categoria })

        res.status(201).send({ filme })

    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const listarFilme = async (req, res) => {
    try {
        // Rodar um comando de SELECT no banco de dados
        const resultado = await Filme.findAll()
        res.status(200).send({ resultado: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const listarFilmePorCategoria = async (req, res) => {
    try {
        const categoria = req.params.categoria
        // const { categoria } = req.params
        // Rodar um comando de SELECT no banco de dados
        // const resultado = await conexao.query(`SELECT * FROM filmes WHERE categoria = '${categoria}'`)
        const resultado = await Filme.findAll({ where: { categoria }})
        console.log(resultado)
        res.status(200).send({ resultado: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const atualizarFilme = async (req, res) => {
    try {
        const id = req.params.id
        const { titulo, categoria } = req.body
        // const resultado = await conexao.query(`UPDATE filmes SET titulo = '${titulo}', categoria = '${categoria}' WHERE id = ${id}`)
        const resultado = await Filme.update({ titulo, categoria }, { where: { id } })
        res.status(200).send({ mensagem: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const apagarFilme = async (req, res) => {
    try {
        const id = req.params.id
        // await conexao.query(`DELETE FROM filmes WHERE id = ${id}`)
        await Filme.destroy({ where: { id }})
        res.status(200).send({ mensagem: 'Filme apagado com sucesso' })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

// Exportar controllers para importar nas rotas
export { criarFilme, listarFilme, listarFilmePorCategoria, atualizarFilme, apagarFilme }