const { pool } = require('../../database');

const cadastrarCliente = async (req, res) => {
    const { primeiroNome, sobrenome, email, cpf, rua, numero, bairro, municipio, uf, cep, senha } = req.body;
    
    try {
        const query = `
            INSERT INTO cliente (primeiro_nome)
            VALUES ($1)
        `;
        const values = [primeiroNome];

        await pool.query(query, values);
        
        res.status(201).send('Cliente cadastrado com sucesso!');
    } catch (error) {
        console.error('Erro ao cadastrar cliente:', error);
        res.status(500).send('Erro interno do servidor');
    }
};

module.exports = { cadastrarCliente };
