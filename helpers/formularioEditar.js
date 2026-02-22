const editProductForm = (product) => {
  return `
    <div class="form-card">
      <h2>Editar Producto</h2>
      <form class="form-upload" action="/dashboard/editar/${product._id}" method="POST" enctype="multipart/form-data">
        <div class="form-row">
          <label>Nombre</label>
          <input class="input" type="text" name="name" placeholder="Nombre del producto" value="${product.name}" required>
        </div>

        <div class="form-row">
          <label>Descripción</label>
          <textarea class="input" name="descripcion" placeholder="Descripción breve" required>${product.descripcion}</textarea>
        </div>

        <div class="form-row">
          <label>Precio</label>
          <input class="input" type="number" name="price" step="0.01" placeholder="0.00" value="${product.price}" required>
        </div>

        <div class="form-row">
          <label>Imagen</label>
          <img src="${product.imagen}" width="150" alt="${product.name}" style="margin-bottom: 10px; border-radius: 8px;">
          <p style="font-size: 12px; color: #666;">Carga una nueva imagen para cambiarla</p>
          <input class="input" type="file" name="image" accept="image/*">
        </div>

        <div class="form-row">
          <label>Categoría</label>
          <select class="input" name="categoria" required>
            <option value="Camisetas" ${product.categoria === "Camisetas" ? "selected" : ""}>Camisetas</option>
            <option value="Pantalones" ${product.categoria === "Pantalones" ? "selected" : ""}>Pantalones</option>
            <option value="Zapatos" ${product.categoria === "Zapatos" ? "selected" : ""}>Zapatos</option>
            <option value="Accesorios" ${product.categoria === "Accesorios" ? "selected" : ""}>Accesorios</option>
          </select>
        </div>

        <div class="form-row two-cols">
          <div>
            <label>Talla</label>
            <select class="input" name="talla" required>
              <option value="XS" ${product.talla === "XS" ? "selected" : ""}>XS</option>
              <option value="S" ${product.talla === "S" ? "selected" : ""}>S</option>
              <option value="M" ${product.talla === "M" ? "selected" : ""}>M</option>
              <option value="L" ${product.talla === "L" ? "selected" : ""}>L</option>
              <option value="XL" ${product.talla === "XL" ? "selected" : ""}>XL</option>
            </select>
          </div>
          <div>
            <label>Color</label>
            <select class="input" name="color" required>
              <option value="Rojo" ${product.color === "Rojo" ? "selected" : ""}>Rojo</option>
              <option value="Azul" ${product.color === "Azul" ? "selected" : ""}>Azul</option>
              <option value="Verde" ${product.color === "Verde" ? "selected" : ""}>Verde</option>
              <option value="Negro" ${product.color === "Negro" ? "selected" : ""}>Negro</option>
              <option value="Blanco" ${product.color === "Blanco" ? "selected" : ""}>Blanco</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <button class="btn-home btn-submit" type="submit">Actualizar producto</button>
        </div>
      </form>
    </div>
  `;
};

module.exports = editProductForm;
