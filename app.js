const http = require('http');
const express = require('express');
const adminRouter = require('./router/admin');
const shopRouter = require('./router/shop')
const app = express();

app.use(express.urlencoded({extended: false}));

app.use(adminRouter);
app.use(shopRouter);

app.use((req, res) => { 
    res.status(404).send('<h1>page not found</h1>');
 })

const server = http.createServer(app);

server.listen(3000);
