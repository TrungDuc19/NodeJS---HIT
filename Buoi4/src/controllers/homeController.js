const data = require("../data/db");

const getHome = (req, res) => {
    res.render('home.ejs');
}

const getProduct = (req, res) => {

    res.render('product.ejs', { data });
}

const getAddProduct = (req, res) => {
    res.render('add-product.ejs');
}

module.exports = {
    getHome,
    getProduct,
    getAddProduct,
}