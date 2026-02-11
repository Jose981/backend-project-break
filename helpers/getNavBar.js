const getNavBar = (isDashboard = false) => `
<nav>
    <a href="/products">Inicio</a>
    <a href="/dashboard">Dashboard</a>
    ${isDashboard ? '<a href="/dashboard/new"> + Nuevo Producto</a>' : ""}
  </nav>
`;
module.exports = { getNavBar };
