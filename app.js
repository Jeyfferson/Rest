const express = require('express'); //importando na const
const app = express() // Aqui é uma instância do express

const rotasProtudos = require('./routes/produtos')
const rotasPedidos = require('./routes/pedidos')


app.use('/produtos', rotasProtudos)
app.use('/pedidos', rotasPedidos)

/*
app.use('/teste',(req, res, next) => { //req=requisição, res=resultado, next=proxima pagina
   res.status(200).send({ //send é um obj criado para retornar a res.
      mensagem: 'Ok. tudo certo.'
   })
})
*/

module.exports = app; //Exportar app.js