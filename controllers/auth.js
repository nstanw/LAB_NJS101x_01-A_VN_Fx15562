exports.getLogin = (req, res, next) => {
  // const isLoggedIn =
  //   req.get('cookie')
  //   .split(';')[1]
  //   .trim()
  //   .split('=')[1] == true;
  console.log(req.session.isLoggedIn);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  // res.setHeader('Set-Cookie', 'loggedIn=true; Max-Age=31536000; Expires=Thu, 01 Jan 1970');
  // https://viblo.asia/p/ban-da-hieu-ro-ve-http-cookie-djeZ1DvGKWz
  req.session.isLoggedIn = true;
  res.redirect('/');
};
