//Templates de productos y de producto
const getProductCards = (products) => {
  let html = '<div class="products-container">';

  products.forEach((product) => {
    html += `
      <div class="product-card">
        <img src="${product.imagen}" alt="${product.name}" class="imagen">
        <h3>${product.name}</h2>
        <p>${product.descripcion}</p>
        <p class="price">${product.price}€</p>
        <div class="info-extra">
            <span>Talla: ${product.talla}</span> | <span>Color: ${product.color}</span>
        </div>
        <div class="buttons">
            <a class="btn-home btn-submit" href="/products/${product._id}">Ver detalle</a>
        </div>
      </div>
    `;
  });

  html += "</div>";
  return html;
};

const getProduct = (product) => {
  let html = `<div class="product-detail-container">`;
  html += `
    <div class="product-detail">
      <div class="product-image">
        <img src="${product.imagen}" alt="${product.name}"/>
      </div>
      <div class="product-info">
        <h2>${product.name}</h2>
        <p class="product-description">${product.descripcion}</p>
        
        <div class="product-specs">
          <div class="spec">
            <strong>Precio:</strong>
            <span class="price">${product.price}€</span>
          </div>
          <div class="spec">
            <strong>Categoría:</strong>
            <span>${product.categoria}</span>
          </div>
          <div class="spec">
            <strong>Talla:</strong>
            <span>${product.talla}</span>
          </div>
          <div class="spec">
            <strong>Color:</strong>
            <span>${product.color}</span>
          </div>
        </div>

        <div class="product-actions">
          <a href="/products" class="btn-home btn-secondary">Volver</a>
        </div>
      </div>
    </div>
  `;

  html += `</div>`;
  return html;
};

module.exports = { getProductCards, getProduct };
