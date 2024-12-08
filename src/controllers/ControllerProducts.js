class ControllerProducts {
    constructor(productService) {
      this.productService = productService;
    }
    async create(req, res) {
      const {
        name,
        price,
        price_with_discount,
        enabled,
        use_in_menu,
        stock,
        description,
      } = req.body;
  
      try {
        if (!name || !price || !price_with_discount) {
          return res.status(400).json({
            message: "Os campos 'name', 'price' e 'price_with_discount' são obrigatórios",
          });
        }
  
        const product = await this.productService.createProduct({
          name,
          price,
          price_with_discount,
          enabled,
          use_in_menu,
          stock,
          description,
        });
        return res.status(201).json(product);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    }
    async update(req, res) {
      const { id } = req.params;
      const {
        nome,
        preco,
        preco_com_desconto,
        enabled,
        use_no_menu,
        estoque,
        descricao,
      } = req.body;
  
      try {
        const product = await this.productService.updateProduct(id, {
          nome,
          preco,
          preco_com_desconto,
          enabled,
          use_no_menu,
          estoque,
          descricao,
        });
        return res.status(200).json(product);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    }
  
    async delete(req, res) {
      const { id } = req.params;
  
      try {
        const message = await this.productService.deleteProduct(id);
        return res.status(200).json(message);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    }
 
    async getAll(req, res) {
      try {
        const products = await this.productService.getAllProducts();
        return res.status(200).json(products);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    }

    async getById(req, res) {
      const { id } = req.params;
  
      try {
        const product = await this.productService.getProductById(id);
        return res.status(200).json(product);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    }
  }
  
  module.exports = ControllerProducts;
  