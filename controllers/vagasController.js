// Importar a conexão do banco de dados
import { Vaga } from "../models/Vaga.js"

const criarVaga = async (req, res) => {
    try {
        const { titulo, descricao, cargo, cidade, salario } = req.body;

        if (!titulo || !descricao || !cargo || !cidade || salario === undefined) {
            return res.status(400).send({ mensagem: 'Favor informar todos os campos obrigatórios' });
        }

        const vaga = await Vaga.create({ titulo, descricao, cargo, cidade, salario });
        res.status(201).send({ mensagem: "Vaga criada com sucesso", vaga });

    } catch (erro) {
        console.error(erro);
        res.status(500).send({ mensagem: 'Erro interno ao criar a vaga' });
    }
};


const listarVagas = async (req, res) => {
    try {
        const vagas = await Vaga.findAll();

        if (vagas.length === 0) {
            return res.status(404).send({ mensagem: 'Nenhuma vaga encontrada' });
        }

        res.status(200).send({ vagas });

    } catch (erro) {
        console.error(erro);
        res.status(500).send({ mensagem: 'Erro interno ao listar vagas' });
    }
};


const listarVagaPorId = async (req, res) => {
    try {
        const id = req.params.id
        
        const resultado = await Vaga.findAll({ where: { id }})
        console.log(resultado)
        res.status(200).send({ resultado: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const atualizarVagaPorId = async (req, res) => {
    try {
        const id = req.params.id;
        const { titulo, descricao, cargo, cidade, salario } = req.body;

        const resultado = await Vaga.update(
            { titulo, descricao, cargo, cidade, salario },
            { where: { id } }
        );

        if (resultado[0] === 0) {
            return res.status(404).send({ mensagem: 'Vaga não encontrada ou nenhum campo atualizado' });
        }

        res.status(200).send({ mensagem: 'Vaga atualizada com sucesso' });
    } catch (erro) {
        console.error(erro);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
};


const apagarVaga = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await Vaga.destroy({ where: { id } });

        if (resultado === 0) {
            return res.status(404).send({ mensagem: 'Vaga não encontrada' });
        }

        res.status(200).send({ mensagem: 'Vaga apagada com sucesso!' });
    } catch (erro) {
        console.error(erro);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
};


const listarVagaPorCargo = async (req, res) => {
    try {
        const { cargo } = req.query;
        if (!cargo) {
            return res.status(400).send({ mensagem: 'Cargo não informado' });
        }

        const resultado = await Vaga.findAll({ where: { cargo } });
        res.status(200).send({ resultado });
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
};


const listarVagaPorCidade = async (req, res) => {
    try {
        const { cidade } = req.query;
        if (!cidade) {
            return res.status(400).send({ mensagem: 'Cidade não informada' });
        }

        const resultado = await Vaga.findAll({ where: { cidade } });
        res.status(200).send({ resultado });
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
};


// Exportar controllers para importar nas rotas
export { criarVaga, listarVagas, listarVagaPorId, atualizarVagaPorId, apagarVaga, listarVagaPorCargo, listarVagaPorCidade }