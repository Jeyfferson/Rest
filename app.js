const express = require('express'); //importando na const
const app = express() // Aqui é uma instância do express
const morgan = require('morgan');
const bodyParser = require('body-parser')

const rotasProtudos = require('./routes/produtos')
const rotasPedidos = require('./routes/pedidos')


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false})) // aceitar apenas dados simples
app.use(bodyParser.json()) // aceitar apenas o formato json no body

app.use((req, res, next) => {
   res.header('Acess-Control-Allow-Origin', '*')//Permissão de acesso para todos '*', senão 'https://servidorespecifico.com'
   res.header('Access-Control-Allow-Header', 
   'Origin, X-Requrested-With, Content-type, Accept, Authorization'
   );

   if (req.method === 'OPTIONS'){
      res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).send({});
   }

   next();
})

app.use('/produtos', rotasProtudos)
app.use('/pedidos', rotasPedidos)

// CASO NÃO ENCONTRE NENHUMA ROTA
app.use((req, res, next) => {
   const erro = new Error('Não encontrado!')
   erro.status = 404;
   next(erro);
})
// MOSTRANDO A MENSAGEM DO ERRO NO CONSOLE
app.use((error, req, res, next) => {
   res.status(error.status || 500)
   return res.send({
      erro: {
         mensagem: error.message
      }
   })
})

/*
app.use('/teste',(req, res, next) => { //req=requisição, res=resultado, next=proxima pagina
   res.status(200).send({ //send é um obj criado para retornar a res.
      mensagem: 'Ok. tudo certo.'
   })
})
*/

module.exports = app; //Exportar app.js