const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const expressHbs = require('express-handlebars');

app.engine('hbs', expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminData = require('./router/admin');
const shopRouter = require('./router/shop');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRouter);

app.use((req, res) => {
    res.status(404).render("404.hbs",{pageTitle: 'Page not found'});
})

const server = http.createServer(app);

server.listen(3000);
console.log("Starting server on port 3000... http://localhost:3000"); 
