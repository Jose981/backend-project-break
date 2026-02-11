const getProductsTemplate = (products, isDashboard = false) => {
  return products
    .map(
      (p) => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}">
      <h2>${p.name}</h2>
      <p>${p.price}€</p>
      <a href="${isDashboard ? "/dashboard/" : "/products/"}${p._id}">Ver detalle</a>
      ${isDashboard ? `<a href="/dashboard/${p._id}/edit">Editar</a>` : ""}
    </div>
  `,
    )
    .join("");
};
