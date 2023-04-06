const fs = require('fs');
const path = require('path');

const readFile = () => {
    const rawProducts = fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8');
    const products = JSON.parse(rawProducts);
    return products;
}

const writeFile = products => {
    const rawProducts = JSON.stringify(products);
    fs.writeFile(path.join(__dirname, 'db.json'), rawProducts, (err, data) => {
        if (err) throw err;
        console.log('Write file successfully');
    });
}

class Product {
    constructor(product) {
        this.product = product
    }

    static getAll() {
        const products = readFile();
        products.sort((a, b) => a.price - b.price);
        return products;
    }

    static create(newProduct) {
        const products = readFile();
        products.push(newProduct);
        writeFile(products);
        return products;
    }

    static getById(id) {
        const products = readFile();
        return products.find(p => p.id == id);
    }

    static updateById(id, updateProduct) {
        const products = readFile();
        const updateProducts = products.map(product => product.id != id ? product : updateProduct);
        writeFile(updateProducts);
        return updateProducts;
    }

    static deleteById(id) {
        const products = readFile();
        const deleteProducts = products.filter(product => product.id != id);
        writeFile(deleteProducts);
        return deleteProducts;
    }
}

module.exports = Product;