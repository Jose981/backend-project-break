const isAdmin = (req, res, next) => {
  if (req.session && req.session.isAdmin) {
    return next();
  } else {
    res.redirect("/auth");
  }
};

module.exports = { isAdmin };
