const Products = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

exports.postAddProduct =  (req, res, next) => {
    // products.push({ title: req.body.title });
    const product = new Products(req.body.title);
    product.save();
    res.redirect('/');
  }

exports.getProducts =  (req, res, next) => {
    const products = Products.fetchAll();
    console.log(products);
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
}
