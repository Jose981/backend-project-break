const createProductForm = () => {
  return `
    <div class="form-card">
      <h2>Añadir Nuevo Producto</h2>
      <form class="form-upload" action="/dashboard/new" method="POST" enctype="multipart/form-data">
        <div class="form-row">
          <label>Nombre</label>
          <input class="input" type="text" name="name" placeholder="Nombre del producto" required>
        </div>

        <div class="form-row">
          <label>Descripción</label>
          <textarea class="input" name="descripcion" placeholder="Descripción breve" required></textarea>
        </div>

        <div class="form-row">
          <label>Precio</label>
          <input class="input" type="number" name="price" step="0.01" placeholder="0.00" required>
        </div>

        <div class="form-row">
          <label>Imagen</label>
          <input class="input" type="file" name="image" accept="image/*" required>
        </div>

        <div class="form-row">
          <label>Categoría</label>
          <select class="input" name="categoria" required>
            <option value="Camisetas">Camisetas</option>
            <option value="Pantalones">Pantalones</option>
            <option value="Zapatos">Zapatos</option>
            <option value="Accesorios">Accesorios</option>
          </select>
        </div>

        <div class="form-row two-cols">
          <div>
            <label>Talla</label>
            <select class="input" name="talla" required>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div>
            <label>Color</label>
            <select class="input" name="color" required>
              <option value="Rojo">Rojo</option>
              <option value="Azul">Azul</option>
              <option value="Verde">Verde</option>
              <option value="Negro">Negro</option>
              <option value="Blanco">Blanco</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <button class="btn-home btn-submit" type="submit">Crear producto</button>
        </div>
      </form>
    </div>
  `;
};

module.exports = createProductForm;
