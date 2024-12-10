const { Category } = require("../models/Category");

class CategoriaService {
  async createCategory({ name, use_in_menu = false }) {
    try {
      const category = await Category.create({
        nome,
        use_in_menu,
        slug: slugify(name)
      });
      return category;
    } catch (error) {
      throw new Error("Erro ao criar categoria: " + error.message);
    }
  }
  async getAllCategories() {
    try {
      const categories = await Category.findAll({
        order: [["id", "ASC"]],
      });
      return categories;
    } catch (error) {
      throw new Error("Erro ao buscar categorias: " + error.message);
    }
  }
  async getCategoryById(id) {
    try {
      const category = await Category.findByPk(id);
      if (!category) {
        throw new Error("Categoria não encontrada");
      }
      return category;
    } catch (error) {
      throw new Error("Erro ao buscar categoria: " + error.message);
    }
  }

  async updateCategory(id, updatedData) {
    try {
      const category = await this.getCategoryById(id);
      if (!category) {
        throw new Error("Categoria não encontrada");
      }

      await category.update(updatedData);
      return category;
    } catch (error) {
      throw new Error("Erro ao atualizar categoria: " + error.message);
    }
  }

  async deleteCategory(id) {
    try {
      const category = await this.getCategoryById(id);
      await category.destroy();
      return { message: "Categoria removida com sucesso" };
    } catch (error) {
      throw new Error("Erro ao remover categoria: " + error.message);
    }
  }
}

module.exports = CategoriaService;