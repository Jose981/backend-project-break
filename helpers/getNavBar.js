const getNavBar = (isDashboard = false) => {
  return `
  <nav>
      <a href="/products">Inicio</a>
      ${
        isDashboard
          ? `
          <a href="/dashboard">DashBoard</a>
          <a href="/dashboard/new"> + Nuevo Producto</a>
          <a href="/auth/logout">Cerrar Sesión</a>
          `
          : '<a href="/auth">Login</a>'
      }
  </nav>
  `;
};

module.exports = { getNavBar };
