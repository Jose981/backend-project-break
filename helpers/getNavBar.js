const getNavBar = (isDashboard = false) => {
  if (isDashboard === true) {
    return `
    <nav>
      <a href="/dashboard">Dashboard</a>
      <div class="navbar-menu">
            <a href="/dashboard/new">Añadir Producto</a>
            <a href="/auth/logout">Cerrar Sesión</a>
      </div>
  </nav>
    `;
  } else {
    return `
    <nav>
      <a href="/products">Tienda</a>
      <div class="navbar-menu">
        <a href="/auth">Login</a>
      </div>
  </nav>
    `;
  }
};

module.exports = { getNavBar };
