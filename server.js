// 📦 Musisz zaimportować tutaj moduł 'http'.
const http = require('http');
// 📦 Żeby użyć tutaj PORT, musisz zaimportować go z modułu konfiguracyjnego z pliku 'config.js'.
const conf = require('./config.js');
// 📦 Zaimportuj funkcję 'requestRouting' z modułu 'routing/routing.js'.
const { requestRouting } = require('./routing/routing.js');
// 🏗 Tutaj, stwórz funkcję 'requestListener, która przekazuje 'request' i 'response' do 'requestRouting'.
const requestListener = (req, resp) => {
    console.log(`[${new Date().toUTCString()}] INFO: Request ${req.method} to ${req.url}`);
    
    requestRouting(req, resp);
}
// 🏗 Tutaj, stwóz serwer Node.js. Pamiętaj przypisać go do stałej i przekazać mu 'requestListener'.
import('./config.js');
const server = http.createServer(requestListener);

// 🏗 Uruchom serwer na porcie PORT.
// Podpowiedź: server.listen(???);

server.listen(conf.PORT, () => {
    console.log(`[${new Date().toUTCString()}] INFO: Server is listening on http://localhost:${conf.PORT}/`);
});