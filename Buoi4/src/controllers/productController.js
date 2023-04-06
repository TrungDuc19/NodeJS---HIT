const Product = require('../models/productModel');

const getProducts = (req, res) => {
    try {
        const products = Product.getAll();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createProduct = (req, res) => {
    try {
        const products = Product.create(req.body);
        res.status(201).json(products);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getProductById = (req, res) => {
    const { id } = req.params;

    try {
        const product = Product.getById(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateProductById = (req, res) => {
    const { id } = req.params;

    try {
        const product = Product.getById(id);
        if (product) {
            const products = Product.updateById(id, req.body);
            res.json(products);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteProductById = (req, res) => {
    const { id } = req.params;

    try {
        const product = Product.getById(id);
        if (product) {
            const products = Product.deleteById(id);
            res.json(products);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getProducts,
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById,
}