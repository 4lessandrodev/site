var express = require('express');
var produtos = require('./../inc/produtos');
var cestas = require('./../inc/cestas');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  produtos.getProdutosAtivos().then(produtos => {
    cestas.getCestasAtivas().then(cestas => {
      res.render('index', {
        title: 'Express',
        home: true,
        produtos,
        cestas
      });
    }).catch(err => {
      res.send(err);
    });
  });
});

module.exports = router;
