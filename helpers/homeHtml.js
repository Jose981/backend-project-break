const getHomeHtml = () => `
    <div class="home-container">
        <h1>Bienvenido a la Tienda</h1>
        <h2>¿Qué deseas hacer hoy?</p>
        <div class="home-buttons">
            <a href="/products" class="btn-home">Ver Productos</a>
            <a href="/auth" class="btn-auth">Acceder como Admin</a>
        </div>
    </div>
`;

module.exports = getHomeHtml;
