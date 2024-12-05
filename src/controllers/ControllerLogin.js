const ServiceLogin = require('../services/AuthService');
const respostas = require('../respostas/responses');

const ServiceLogin = new AuthService();

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return respostas.badRequest(res, "E-mail e a senha são obrigatórios");
  }

  try {
    const result = await ServiceLogin.login({ email, password });
    respostas.success(res, "Login realizado com sucesso", result);
  } catch (error) {
    respostas.unauthorized(res, error.message);
  }
};

module.exports = { login };