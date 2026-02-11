const baseHtml = (content) => `
<!DOCTYPE html>
  <html>
    <head><title>Tienda de Productos</title><link rel="stylesheet" href="/styles.css"></head>
    <body>${content}</body>
  </html>
`;

module.exports = { baseHtml };
