import express from 'express';
import router from './routers/web.js';

const app = express();
const port = 8080;
const hostname = 'localhost';

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static('./src/public'));

app.use('/', router);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})