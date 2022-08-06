const http = require('http');
const express = require('express');
const adminRouter = require('./router/admin');
const shopRouter = require('./router/shop')
const app = express();

app.use(express.urlencoded({extended: false}));

app.use(adminRouter);
app.use(shopRouter);


const server = http.createServer(app);

server.listen(3000);
