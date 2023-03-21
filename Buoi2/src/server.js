import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 8081;
const hostname = 'localhost';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});