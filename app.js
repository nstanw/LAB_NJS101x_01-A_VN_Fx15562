const path = require('path');
const express = require('express');
const app = express();
const errorController = require("./controller/error")

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRouter = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
