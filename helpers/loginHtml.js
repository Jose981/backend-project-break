const loginContent = () => `
<div class="home-container">

<h1>Iniciar Sesión</h1>
<form action="/auth" method="POST" class="form-login">
<div class="parametros-login">
<input type="text" name="username" class="parametro" placeholder="Introduce el nombre del usuario" required>
<input type="password" name="password" class="parametro" style="padding:10px;" placeholder="Introduce la contraseña" required>
</div>
<button type="submit" class="btn-home">Entrar</button>
</form>
</div>
`;

module.exports = loginContent;
