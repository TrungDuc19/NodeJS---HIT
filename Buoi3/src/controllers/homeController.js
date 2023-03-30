import data from "../data/data.js";

const getHome = (req, res) => {
    res.render('home.ejs');
}

const getProduct = (req, res) => {
    res.render('product.ejs', { data: data });
}

const getAddProduct = (req, res) => {
    res.render('add-product.ejs');
}

export {
    getHome,
    getProduct,
    getAddProduct,
}