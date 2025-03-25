// 🏗 Stwórz funkcję 'logoutRouting', która obsłuży stronę wylogowania.
// 🏗 Ustaw odpowiedni nagłówek 'Content-Type'.
// Podpowiedź: response.setHeader("Content-Type", "text/html");
// 🏗 Zakończ odpowiedź HTTP po wyrenderowaniu strony.
// Podpowiedź: return response.end();

// 🔧 Wyeksportuj funkcję 'logoutRouting', aby inne moduł mogły jej używać.
function logoutRouting(method, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
  
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Shop – Logout</title>
      </head>
      <body>
          <h1>Logout</h1>
          <nav>
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/kill">Logout from application</a></li>
              </ul>
          </nav>
          <p>You have been successfully logged out.</p>
      </body>
      </html>
    `;
  
    response.end(htmlContent);
  }
  
  module.exports = logoutRouting;