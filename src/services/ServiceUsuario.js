const tabelaUser = require('./models/user');
const respostas = require('../responses');
const bcrypt = require('bcrypt');

async function getUserId(req, res) {
  const id = req.params.id;
  try {
    const usuario = await tabelaUser.findByPk(id);
    if (!usuario) return respostas.notFound(res, 'Usuário não encontrado');

    const showUser = {
      id: usuario.id,
      firstname: usuario.firstname,
      surname: usuario.surname,
      email: usuario.email,
    };
    respostas.success(res, 'Usuário encontrado', showUser);
  } catch (erro) {
    respostas.InternalServerError(res, 'Ocorreu um erro ao procurar o usuário');
  }
}

const postUser = async (req, res) => {
  const { firstname, surname, email, password } = req.body;
  if (!firstname || !surname || !email || !password) {
    return respostas.badRequest(res, 'Todos os campos são obrigatórios');
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return respostas.badRequest(res, 'E-mail inválido');
  }

  if (password.length < 6) {
    return respostas.badRequest(res, 'A senha deve ter pelo menos 6 caracteres');
  }

  try {
    const usuarioExiste = await tabelaUser.findOne({ where: { email } });
    if (usuarioExiste) {
      return respostas.badRequest(res, 'E-mail já está em uso');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedSenha = await bcrypt.hash(password, salt);

    const novoUsuario = await tabelaUser.create({
      firstname,
      surname,
      email,
      password: hashedSenha,
    });

    if (!novoUsuario) {
      return respostas.badRequest(res, 'Erro ao criar usuário');
    }

    const exibeUsuario = {
      firstname: novoUsuario.firstname,
      surname: novoUsuario.surname,
      email: novoUsuario.email,
    };
    respostas.created(res, 'Usuário criado com sucesso', exibeUsuario);
  } catch (error) {
    respostas.InternalServerError(res, 'Ocorreu um erro na criação do usuário');
  }
};

const putUser = async (req, res) => {
  const id = req.params.id;
  const { firstname, surname, email } = req.body;

  if (!firstname && !surname && !email) {
    return respostas.badRequest(res, 'Pelo menos um campo deve ser enviado para atualização');
  }

  try {
    const usuario = await tabelaUser.findByPk(id);
    if (!usuario) return respostas.notFound(res, 'Usuário não encontrado');

    const AttUsuario = await usuario.update({
      firstname: firstname || usuario.firstname,
      surname: surname || usuario.surname,
      email: email || usuario.email,
    });

    respostas.success(res, 'Usuário atualizado com sucesso', AttUsuario);
  } catch (error) {
    respostas.InternalServerError(res, 'Ocorreu um erro na atualização do usuário');
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const usuario = await tabelaUser.destroy({ where: { id } });
    if (!usuario) return respostas.notFound(res, `Usuário com id=${id} não foi encontrado`);
    respostas.success(res, `Usuário com id=${id} foi removido com sucesso`);
  } catch (error) {
    respostas.InternalServerError(res, 'Ocorreu um erro na remoção do usuário');
  }
};

module.exports = {
  getUserId,
  postUser,
  putUser,
  deleteUser,
};