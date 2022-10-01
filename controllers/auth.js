exports.getLogin = (req, res, next) => {
  const isLoggedIn = (req.get('cookie').split(';')[1].trim().split('=')[1] == true);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader('Set-Cookie', 'loggedIn=true');
  res.redirect('/');
};
