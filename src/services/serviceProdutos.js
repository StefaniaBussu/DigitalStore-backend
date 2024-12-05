const { Produto } = require("../models");

class ProdutoService {
  async createProduto({
    name,
    price,
    price_with_discount,
    enabled = false,
    use_in_menu = false,
    stock = 0,
    description = null,
  }) {
    try {
      const produto = await Produto.create({
        name,
        price,
        price_with_discount,
        enabled,
        use_in_menu,
        stock,
        description,
      });
      return produto;
    } catch (error) {
      throw new Error("Erro ao criar produto: " + error.message);
    }
  }

  async getProdutoById(id) {
    try {
      const produto = await Produto.findByPk(id);
      if (!produto) {
        throw new Error("Produto não encontrado");
      }
      return produto;
    } catch (error) {
      throw new Error("Erro ao buscar produto: " + error.message);
    }
  }

  async updateProduto(id, updatedData) {
    try {
      const produto = await Produto.findByPk(id);

      if (!produto) {
        throw new Error("Produto não encontrado");
      }

      await produto.update(updatedData);
      return produto;
    } catch (error) {
      throw new Error("Erro ao atualizar produto: " + error.message);
    }
  }

  async deleteProduto(id) {
    try {
      const produto = await Produto.findByPk(id);
      if (!produto) {
        throw new Error("Produto não encontrado");
      }

      await produto.destroy();
      return { message: "Produto deletado com sucesso" };
    } catch (error) {
      throw new Error("Erro ao deletar produto: " + error.message);
    }
  }

  async getAllProdutos() {
    try {
      const produtos = await Produto.findAll();
      return produtos;
    } catch (error) {
      throw new Error("Erro ao listar produtos: " + error.message);
    }
  }
}

module.exports = ProdutoService;