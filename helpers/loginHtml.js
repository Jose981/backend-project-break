const loginContent = () => `
<div class="login-container">

<h1>Iniciar Sesión</h1>
<form action="/auth" method="POST">
<input type="text" name="username" placeholder="Introduce el nombre del usuario" required>
<input type="password" name="password" placeholder="Introduce la contraseña" required>
<button type="submit">Entrar</button>
</form>
</div>
`;

module.exports = loginContent;
