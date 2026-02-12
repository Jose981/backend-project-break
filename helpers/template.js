// helpers/template.js
const getProductCards = (products, isDashboard = false) => {
  let html = '<div class="products-container">';

  products.forEach((product) => {
    html += `
      <div class="product-card">
        <img src="${product.imagen}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.descripcion}</p>
        <p class="price">${product.price}€</p>
        <div class="info-extra">
            <span>Talla: ${product.talla}</span> | <span>Color: ${product.color}</span>
        </div>
        
        <div class="buttons">
            <a href="${isDashboard ? "/dashboard/" : "/products/"}${product._id}">Ver detalle</a>
            
            ${
              isDashboard
                ? `
                <a href="/dashboard/${product._id}/edit" class="btn-edit">Editar</a>
                <form action="/dashboard/${product._id}/delete?_method=DELETE" method="POST" style="display:inline;">
                    <button type="submit" class="btn-delete">Eliminar</button>
                </form>
            `
                : ""
            }
        </div>
      </div>
    `;
  });

  html += "</div>";
  return html;
};

module.exports = getProductCards;
