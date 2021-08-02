import express from 'express';
import data from './data.js';

const app = express();
/*const port = process.env.PORT || 5000;*/
/*Always use port from env (hosting)*/
const port =  5000;

app.get('/api/products', (req,res) => {
    res.send(data.products);
});

app.get('/', (req,res) => {
    res.send('Server is ready');
});

app.listen(port, () => {
    console.log(`Serve backend at http://localhost:${port}`);
});