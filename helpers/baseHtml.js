const baseHtml = (content) => `
<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Mi Tienda</title>
      <link rel="stylesheet" href="/styles.css"> </head>
    <body>
      ${content}
    </body>
  </html>
`;

module.exports = baseHtml;
