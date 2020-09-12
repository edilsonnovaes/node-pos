const express = require('express');
const { route } = require('./product-route');
const router = express.Router();

//Middleware
router.use(function(req, res, next){
  console.log('Interceptação pelo middleware'); // LOG, autenticação, validação ...
  next();
});

router.get('/', (req, res) => res.send("rota teste ok"));


module.exports = router;