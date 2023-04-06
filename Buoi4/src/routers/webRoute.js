const express = require('express');
const {
    getAddProduct,
    getHome,
    getProduct
} = require('../controllers/homeController.js');

const webRouter = express.Router();

webRouter.get('/', getHome);
webRouter.get('/product', getProduct);
webRouter.get('/add-product', getAddProduct);

module.exports = webRouter;
