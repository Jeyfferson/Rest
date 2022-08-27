const express = require('express');
const router = express.Router();

// Retorna todos os produtos
router.get('/',(req, res, next) => {
   res.status(200).send({
      mensagem: 'Consultando todos os produtos.'
   })
})


// INSERE UM PRODUTO
router.post('/',(req, res, next) => {

   const produto = { //criando um objeto produto com 2 propriedade
      nome_produto: req.body.nome,
      preco_produto: req.body.preco
   }

   res.status(201).send({
      mensagem: 'Produto inserido com sucesso.',
      produtoCriado: produto
   });
})

// RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next) => {
   const id = req.params.id_produto; // interpreta os ":" como parametro e passa para a const ID

   if (id === 'especial'){
      res.status(200).send({
         mensagem: 'Consultando o produto com o ID',
         id: id
      });
   }else{
      res.status(200).send({
         mensagem: 'ID inválido'
      });
   }
})

// ALTERANDO UM PRODUTO
router.patch('/', (req, res, next) => {
   res.status(201).send({
      mensagem: 'Produto alterado com sucesso.'
   })
})

// DELETANDO UM PRODUTO
router.delete('/',(req, res, next) =>{
   res.status(201).send({
      mensagem: 'Produto DELETADO com sucesso.'
   })
})

module.exports = router;