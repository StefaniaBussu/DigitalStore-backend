const { Produto } = require('../models/Product');

describe('Testes dos produtos', () => {
  beforeEach(async () => {
    await Produto.destroy({ where: {} });
  });
  it('Produto criado com sucesso', async () => {
    const produto = await Produto.create({
      nome: 'Produto Teste',
      preco: 100,
      preco_com_desconto: 90,
      estoque: 10,
    });

    expect(produto.nome).toBe('teste produto');
    expect(produto.preco).toBe(100);
  });

  it('ERRO! Produto não tem preço', async () => {
    await expect(
      Produto.create({
        nome: 'Produto Sem Preço',
      })
    ).rejects.toThrow();
  });
});
