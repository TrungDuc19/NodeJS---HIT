const express = require('express');
const webRouter = require('./routers/webRoute');
const productRouter = require('./routers/productRoute');

const app = express();
const port = 8080;
const hostname = 'localhost';

app.use(express.json());

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static('./src/public'));

app.use(webRouter);
app.use('/api/v1/products', productRouter);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})