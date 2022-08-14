const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

const adminData = require('./router/admin');
const shopRouter = require('./router/shop');

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminData.routes);
app.use(shopRouter);

app.use((req, res) => { 
    res.status(404).sendFile(path.join(__dirname,'views', '404.html'));
 })

const server = http.createServer(app);

server.listen(3000);
console.log("Starting server on port 3000... http://localhost:3000"); 
