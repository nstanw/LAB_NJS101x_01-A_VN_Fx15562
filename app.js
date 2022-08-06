const http = require('http');
const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));

app.use('/add-product',(req, res, next) => {
    console.log('The Add product page!');
    res.send(`
        <form action="product" method="POST">
        <input name="title" type="text"></input>
        <button type="submit">Submit</button>  
        </form>
    `);
});

app.post('/product', (req, res, next) => { 
    console.log(req.body);
    res.redirect('/') 
});

app.use('/',(req, res, next) => {
    console.log('Hello from express.js!');
    res.send('<h1>Hello from express.js!</h1>')
})

const server = http.createServer(app);

server.listen(3000);
