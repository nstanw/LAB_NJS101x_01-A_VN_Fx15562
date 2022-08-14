const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../util/path')
const adminData = require('./admin')

router.get('/',(req,res, next) => { 
  const products = adminData.products;
  res.render('shop.pug',{
      prods: products, 
      docTitle: "Shop", 
      // description: products[0].description,
      // price: products[0].price,
  });
 });

module.exports = router