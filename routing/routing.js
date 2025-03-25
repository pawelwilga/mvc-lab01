// 📦 Zaimportuj moduł odpowiedzialne za routing poszczególnych części aplikacji.
// 📦 Zaimportuj obiekt STATUS_CODE.

// 🏗 Stwórz tutaj funkcję 'requestRouting', która będzie obsługiwać zapytania HTTP.
// Podpowiedź: const requestRouting = (request, response) => {
// 🏗 Tutaj stwórz logowanie do konsoli informacji, mówiące o typie logowania (INFO), dacie, metodzie oraz url żądania.
// 🏗 Tutaj stwórz podstawowy 'request routing' dla ścieżek '/', zawierającej /product' oraz '/logout'. Przekaż `request` i `routing` do odpowiednio routingu.

// 🏗 Obsłuż specjalny przypadek, jeśli użytkownik zostanie przekierowany na ścieżkę /kill, aplikacja się zamknie.
// 🏗 Stwórz również logowanie do konsoli informacji, mówiące o typie logowania (PROCESS), dacie oraz informację, że wylogowowyanie zostało wywołane a aplikacja zamknie się.

// 🏗 Tutaj stwórz obsługę przypadku, jeśli żądany URL nie istnieje. Zwróć wtedy błąd 404.
// 🏗 Stwórz również logowanie do konsoli informacji, mówiące o typie logowania (ERROR), dacie oraz informację, że żądany url nie istnieje.
//  };

const homeRouting = require('./home');
const productRouting = require('./product');
const logoutRouting = require('./logout');
const { STATUS_CODES } = require('../constants/statusCode');

function requestRouting(req, res) {
  const now = new Date().toUTCString();
  const method = req.method;
  const url = req.url;

  console.log(`INFO [${now}]: ${method} - ${url}`);

  if (url === '/') {
    homeRouting(req, res);
  } else if (url.startsWith('/product')) {
    productRouting(req, res);
  } else if (url === '/logout') {
    logoutRouting(req, res);
  } else if (url === '/kill') {
    console.log(`- PROCESS [${now}]: logout has been initiated and the application will be closed`);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Application closed.');
    process.exit();
  } else {
    console.log(`ERROR [${now}]: requested url ${url} doesn’t exist.`);
    res.writeHead(STATUS_CODES.NOT_FOUND, { 'Content-Type': 'text/html' });
    res.end(`<html lang="en"><head><title>NOT FOUND</title><body><h1>404 Not Found</h1><p>Requested URL: ${url} doesn't exist.</p></body></html>`);
  }
}

// 🔧 Wyeksportuj funkcję 'requestRouting', aby inne moduł mogły jej używać.
module.exports = { requestRouting };