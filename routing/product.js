// 📦 Zaimportuj moduły 'fs' oraz 'STATUS_CODE' do obsługi produktów.

// 🏗 Stwórz funkcję 'productRouting', która obsłuży żądania dotyczące produktów.

// 🏗 Stwórz funkcję 'renderAddProductPage', która wyrenderuje stronę dodawania produktu.

// 🏗 Stwórz funkcję 'renderNewProductPage', która wyświetli najnowszy produkt z pliku 'product.txt'.
// Podpowiedź: fileSystem.readFile(...);

// 🏗 Stwóz funkcję 'addNewProduct', która obsłuży dodawanie nowego produktu, zapisywanie go do pliku 'product.txt' oraz przeniesie użytkownika na stronę '/product/new'.
// Podpowiedź: fileSystem.writeFile(...);
// Podpowiedź: response.setHeader("Location", "/product/new");

// 🔧 Wyeksportuj funkcję 'productRouting', aby inne moduł mogły jej używać.
function productRouting(method, url, response) {
    if (url.toString().startsWith('/product/add')) {
      if (method === 'GET') {
        console.log('Obsługuję GET dla /product/add - wyświetlam formularz dodawania produktu');
        // Tutaj powinna być logika renderująca formularz HTML do dodawania produktu
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Shop – Add Product</title>
          </head>
          <body>
              <h1>Add New Product</h1>
              <form action="/product/add" method="POST">
                  <div>
                      <label for="name">Product Name:</label>
                      <input type="text" id="name" name="name" required>
                  </div>
                  <button type="submit">Add Product</button>
              </form>
              <p><a href="/">Home</a></p>
          </body>
          </html>
        `);
      } else if (method === 'POST') {
        console.log('Obsługuję POST dla /product/add - dodaję nowy produkt');
        // Tutaj powinna być logika dodająca nowy produkt (np. odczytanie danych z żądania)
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Product added successfully!');
      } else {
        console.log(`ERROR: requested url ${url} with method ${method} doesn’t exist for product.`);
        response.writeHead(405, { 'Content-Type': 'text/plain' }); // 405 Method Not Allowed
        response.end(`Cannot ${method} on ${url}`);
      }
    } else if (url.toString().startsWith('/product/new')) {
      console.log('Obsługuję żądanie dla /product/new - wyświetlam najnowszy produkt');
      // Tutaj powinna być logika renderująca stronę z najnowszym produktem
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Shop – Newest Product</title>
        </head>
        <body>
            <h1>Newest Product</h1>
            <p>Here is the newest product available.</p>
            <p><a href="/">Home</a></p>
          </body>
        </html>
      `);
    } else {
      console.log(`ERROR: requested url ${url} doesn’t exist for product.`);
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.end('Product not found.');
    }
  }
  
  module.exports = productRouting;