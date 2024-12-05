const jwt = require('jsonwebtoken');
const respostas = require('../respostas')

function validaToken(req, res, next) {
    const retornaToken = req.header('Authorization');

    if (!retornaToken) return respostas.unauthorized(res, 'acesso negado');
    
    try {
        const tokenDecodado = jwt.verify(retornaToken, process.env.KEY_TOKEN);
        req.userId =tokenDecodado.userId;

        next();
    }
    catch (error) {
        return respostas.unauthorized(res, 'Token invalido')
    }
};

module.exports = validaToken;