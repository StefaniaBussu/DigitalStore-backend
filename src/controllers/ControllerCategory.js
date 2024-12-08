class ControllerCategory {
    constructor(categoryService) {
      this.categoryService = categoryService;
    }
  
    async create(req, res) {
      const { name, use_in_menu } = req.body;
  
      if (!name) {
        return res.status(400).json({ message: "A resposta não pode ficar em branco" });
      }
  
      try {
        const category = await this.categoryService.createCategory({
          name,
          use_in_menu,
        });

        return res.status(201).json(category);
      } catch (error) {
        console.error("Erro! Não foi possível criar a categoria:", error.message);
        return res.status(400).json({ error: error.message });
      }
    }
  

    async getAll(req, res) {
      try {
        const categories = await this.categoryService.getAllCategories();
        return res.status(200).json(categories);
      } catch (error) {
        console.error("Erro! Não foi possível buscar categorias:", error.message);
        return res.status(400).json({ error: error.message });
      }
    }
  
    async getById(req, res) {
      const { id } = req.params;
  
      try {
        const category = await this.categoryService.getCategoryById(id);
        return res.status(200).json(category);
      } catch (error) {
        console.error("Erro ao buscar categoria:", error.message);
        return res.status(404).json({ error: error.message });
      }
    }
  
    async update(req, res) {
      const { id } = req.params;
      const updatedData = req.body;
  
      try {
        const category = await this.categoryService.updateCategory(id, updatedData);
        return res.status(200).json(category);
      } catch (error) {
        console.error("Erro ao atualizar categoria:", error.message);
        return res.status(400).json({ error: error.message });
      }
    }
    async delete(req, res) {
      const { id } = req.params;
  
      try {
        const result = await this.categoryService.deleteCategory(id);
        return res.status(200).json(result);
      } catch (error) {
        console.error("Erro ao remover categoria:", error.message);
        return res.status(400).json({ error: error.message });
      }
    }
  }
  
  module.exports = ControllerCategory;
  