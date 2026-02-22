const baseHtml = require("../helpers/baseHtml");
const loginHtml = require("../helpers/loginHtml");

const login = (req, res) => {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASS
  ) {
    req.session.isAdmin = true;
    req.session.user = username;

    return res.redirect("/dashboard");
  } else {
    const errorInicioSesion = baseHtml(
      loginHtml("Error al iniciar sesion, usuario o contraseña incorrectos"),
    );
    res.send(errorInicioSesion);
  }
};

const iniciarSesion = (req, res) => {
  res.send(baseHtml(loginHtml()));
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("Error al destruir sesión:", err);
    }
    res.clearCookie("connect.sid");
    res.redirect("/products");
  });
};

module.exports = { login, logout, iniciarSesion };
