// 🏗 Stwórz funkcję 'homeRouting', która obsłuży stronę główną.
// 🏗 Ustaw odpowiedni nagłówek 'Content-Type'.
// Podpowiedź: response.setHeader("Content-Type", "text/html");
// 🏗 Zakończ odpowiedź HTTP po wyrenderowaniu strony.
// Podpowiedź: return response.end();

// 🔧 Wyeksportuj funkcję 'homeRouting', aby inne moduł mogły jej używać.
function homeRouting(method, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
  
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <title>Shop – Home</title>
      </head>
      <body style="font-family:sans-serif;">
          <h1>Home</h1>
          <nav>
              <ul>
                  <li><a href="/product/add">Add product</a></li>
                  <li><a href="/product/new">Newest product</a></li>
                  <li><a href="/logout">Logout</a></li>
              </ul>
          </nav>
      </body>
      </html>
    `;
  
    response.end(htmlContent);
  }
  
  module.exports = homeRouting;