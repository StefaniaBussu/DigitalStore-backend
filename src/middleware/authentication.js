const jwt = require('jsonwebtoken');
const respostas = require('../respostas/responses')
const SECRET_KEY = process.env.JWT_SECRET || "senha-unicaa";

function validaToken(req, res, next) {
    const retornaToken = req.header('Authorization');

    if (!retornaToken) return respostas.unauthorized(res, 'Acesso negado');
    
    try {
        const tokenDecodado = jwt.verify(retornaToken, process.env.KEY_TOKEN, SECRET_KEY);
        req.userId =tokenDecodado.userId;

        next();
    }
    catch (error) {
        return respostas.unauthorized(res, 'Token inváido ou expirado')
    }
};

module.exports = validaToken;