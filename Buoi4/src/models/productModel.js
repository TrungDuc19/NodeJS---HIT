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

function getAll() {
    const products = readFile();
    products.sort((a, b) => a.price - b.price);
    return products;
}

function create(newProduct) {
    const products = readFile();
    products.push(newProduct);
    writeFile(products);
    return products;
}

function getById(id) {
    const products = readFile();
    return products.find(p => p.id == id);
}

function updateById(id, updateProduct) {
    const products = readFile();
    const updateProducts = products.map(product => {
        if (product.id == id) {
            return {
                ...product,
                ...updateProduct
            }
        }
        return product;
    });
    writeFile(updateProducts);
    return updateProducts;
}

function deleteById(id) {
    const products = readFile();
    const deleteProducts = products.filter(product => product.id != id);
    writeFile(deleteProducts);
    return deleteProducts;
}

module.exports = {
    getAll,
    create,
    getById,
    updateById,
    deleteById,
};