const express = require('express');
const productRouter = express.Router();

const {
    getProducts,
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById
} = require('../controllers/productController');

productRouter.get('/', getProducts);
productRouter.post('/', createProduct);
productRouter.get('/:id', getProductById);
productRouter.put('/:id', updateProductById);
productRouter.delete('/:id', deleteProductById);

module.exports = productRouter;
