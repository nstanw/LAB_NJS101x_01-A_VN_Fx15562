const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log('this alway run');
next();
})

app.use('/add-product',(req, res, next) => {
    console.log('The Add product page!');
    res.send('<h1>The Add product page</h1>')
});

app.use('/',(req, res, next) => {
    console.log('Hello from express.js!');
    res.send('<h1>Hello from express.js!</h1>')
})

const server = http.createServer(app);

server.listen(3000);
