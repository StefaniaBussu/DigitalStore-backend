const { User } = require('../models/User');

describe('Testes de User', () => {
  beforeEach(async () => {
    await User.destroy({ where: {} });
  });

  it('Criar usuário com sucesso', async () => {
    const user = await User.create({
      firstname: '',
      surname: '',
      email: 'email@exemplo.com',
      password: 'senha123',
    });

    expect(user).toBeDefined();
    expect(user.firstname).toBe('um');
    expect(user.email).toBe('um_email@exemplo.com');
  });
  it('Falha ao criar usuário sem email', async () => {
    await expect(
      User.create({
        firstname: '',
        surname: '',
        password: 'senha',
      })
    ).rejects.toThrow();
  });
  it('Buscar usuário por ID', async () => {
    const user = await User.create({
      firstname: '',
      surname: '',
      email: 'email@exemplo.com',
      password: '',
    });

    const foundUser = await User.findByPk(user.id);
    expect(foundUser).toBeDefined();
    expect(foundUser.firstname).toBe('Alice');
  });

  it('Atualizar usuário', async () => {
    const user = await User.create({
      firstname: '',
      surname: '',
      email: 'email@exemplo.com',
      password: '',
    });

    await user.update({ email: 'novo_email@exemplo.com' });
    expect(user.email).toBe('novo_email@exemplo.com');
  });

  it('Deletar o usuário', async () => {
    const user = await User.create({
      firstname: '',
      surname: '',
      email: 'email@exemplo.com',
      password: '',
    });

    await user.destroy();
    const foundUser = await User.findByPk(user.id);
    expect(foundUser).toBeNull();
  });
});
