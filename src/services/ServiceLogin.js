const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const SECRET_KEY = process.env.JWT_SECRET || "senha-unicaa";

class ServiceLogin {
  async login({ email, password }) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("Credenciais inválidas");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error("Credenciais inválidas");

    const token = jwt.sign(
      { id: user.id, email: user.email },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    return { token, user: { id: user.id, email: user.email, name: user.firstname } };
  }
}

module.exports = ServiceLogin;