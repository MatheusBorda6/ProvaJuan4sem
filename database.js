import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('postgresql://matheus_borda:7wDp_m8LCmTnHtm3ZtrirA@matheussenai-1692.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full')

try {
    await sequelize.authenticate()
    console.log('Conectado com sucesso')
} catch (error) {
    console.error('Erro ao conectar', error)
}

export default sequelize