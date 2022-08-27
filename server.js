// Arquivo principal, aqui será incluido os arquivos de serviços da lib do express

// Variaveis de ambiente
const http = require('http');              //Importando pro projeto o http
const app = require('./app'); //Importando o app.js
const port = process.env.PORT || 3000;     // porta que será usada
const server = http.createServer(app); //Escutando o app na porta

server.listen(port); //Serve vai procurar a porta correta

