const express = require('express');
const router = express.Router();

// Retorna todos os pedidos
router.get('/',(req, res, next) => {
   res.status(200).send({
      mensagem: 'Consultando todos os pedidos.'
   })
})


// INSERE UM PEDIDO
router.post('/',(req, res, next) => {

   const pedido = {
      id_produto: req.body.id_produto,
      quantidade: req.body.quantidade
   }

   res.status(201).send({
      mensagem: 'Pedido inserido com sucesso.',
      pedidoCriado: pedido
   });
})

// RETORNA OS DADOS DE UM PEDIDO
router.get('/:id_pedido', (req, res, next) => {
   const id = req.params.id_pedido; // interpreta os ":" como parametro e passa para a const ID

   if (id === 'especial'){
      res.status(200).send({
         mensagem: 'Consultando o pedido com o ID',
         id: id
      });
   }else{
      res.status(200).send({
         mensagem: 'ID inválido'
      });
   }
})


// DELETANDO UM Pedido
router.delete('/',(req, res, next) =>{
   res.status(201).send({
      mensagem: 'Pedido DELETADO com sucesso.'
   })
})

module.exports = router;