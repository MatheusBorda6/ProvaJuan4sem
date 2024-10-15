// Importar o express, para utilizar o Router
import express from 'express'
import {  criarVaga, listarVagas, listarVagaPorId, atualizarVagaPorId, apagarVaga, listarVagaPorCargo, listarVagaPorCidade } from '../controllers/vagasController.js'
const router = express.Router()

router.post('/vagas', criarVaga)//Adicionar uma nova vaga de emprego.
router.get('/vagas', listarVagas)//Mostra o título de todas as vagas cadastradas.
router.get('/vagas/:id', listarVagaPorId)//Mostrar os detalhes de uma vaga específica pelo seu ID.
router.put('/vagas/:id', atualizarVagaPorId)//Atualizar os dados de uma vaga existente com base no ID.
router.delete('/vagas/:id', apagarVaga)//Remover uma vaga do sistema.
router.get('/cargo/:cargo', listarVagaPorCargo)//Listar as vagas filtradas por cargo (ex: Desenvolvedor, Designer).
router.get('/localizacao/:cidade', listarVagaPorCidade)//Listar as vagas disponíveis em uma determinada cidade.

// Exportar o router pra importar no app
export default router