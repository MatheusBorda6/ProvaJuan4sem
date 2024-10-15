import sequelize from '../database.js'
import { DataTypes } from 'sequelize'

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        primaryKey: true, 
    },
    nome: {
        type: DataTypes.STRING    
    },
    email: {
        type: DataTypes.STRING    
    },
    endereco: {
        type: DataTypes.STRING 
    }
})

// Verificar se existe a tabela, se não existir vai criar
Usuario.sync()

export { Usuario }