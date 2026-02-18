const createProductForm = () => {
  return `
    <div class="form-container">
      <h2>Añadir Nuevo Producto</h2>
      <form action="/dashboard" method="POST" enctype="multipart/form-data">
        <label>Nombre:</label>
        <input type="text" name="name" required>

        <label>Descripción:</label>
        <textarea name="descripcion" required></textarea>

        <label>Precio:</label>
        <input type="number" name="price" step="0.01" required>

        <label>Imagen:</label>
        <input type="file" name="imagen" required>

        <label>Categoría:</label>
        <select name="categoria" required>
          <option value="Camisetas">Camisetas</option>
          <option value="Pantalones">Pantalones</option>
          <option value="Zapatos">Zapatos</option>
          <option value="Accesorios">Accesorios</option>
        </select>

        <label>Talla:</label>
        <select name="talla" required>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <label>Color:</label>
        <select name="color" required>
          <option value="Rojo">Rojo</option>
          <option value="Azul">Azul</option>
          <option value="Verde">Verde</option>
          <option value="Negro">Negro</option>
          <option value="Blanco">Blanco</option>
        </select>

        <button type="submit">Crear</button>
      </form>
    </div>
  `;
};

module.exports = createProductForm;
