var express = require('express');
var produtos = require('./../inc/produtos');
var cestas = require('./../inc/cestas');
var inscricao = require('./../inc/inscricao');
var contact = require('./../inc/contact');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  produtos.getProdutosAtivos().then(produtos => {
    cestas.getCestasAtivas().then(cestas => {
      res.render('index', {
        title: 'Home',
        home: true,
        produtos,
        cestas
      });
    }).catch(err => {
      res.send(err);
    });
  });
});

//-------------------------------------------

router.get('/cestas', function (req, res, next) {
  produtos.getProdutosAtivos().then(produtos => {
    cestas.getCestasAtivas().then(cestas => {
      res.render('cestas', {
        title: 'Cestas',
        home: true,
        produtos,
        cestas
      });
    }).catch(err => {
      res.send(err);
    });
  });
});

router.get('/cestas/:id', function (req, res, next) {
  console.log(req.params.id);
  cestas.getCestaPorId(req.params.id).then(retorno => {
    let cesta = retorno[0];
    cestas.getProdutosDeUmaCestaEspecifica(cesta.itensCesta).then(produtos => {
      console.log(produtos[0]);
      res.render('personalizar', {
        title: 'Personalizar',
        home: true,
        cesta,
        produtos
      }).catch(err => {
        res.send(err);
      });
    }).catch(err => {
      res.send(err);
    });
  }).catch(err => {
    res.send(err);
  });
});

router.post('/', function (req, res, next) {
  inscricao.saveEmail(req.fields.email).then(e => {
  }).catch(err => {
    res.send(err);
  });
});


router.post('/cestas', function (req, res, next) {
  inscricao.saveEmail(req.fields.email).then(e => {
  }).catch(err => {
    res.send(err);
  });
});

//--------------------------------------------------

router.get('/contact', function (req, res, next) {
  contact.render(req, res, null, null);
});

router.post('/contact', function (req, res, next) {
  contact.saveContact(req.body.name, req.body.email, req.body.message).then(retorno => {
    req.body = {};
    contact.render(req, res, null, 'Mensagem salva com sucesso');
  }).catch(err => {
    contact.render(req, res, err.message, null);
  });
});


//--------------------------------------------------
router.get('/personalizar', function (req, res, next) {
  res.render('personalizar', {
    title: 'Personalizar',
    home: true,
    cesta: {}
  });
});

router.post('/personalizar', function (req, res, next) {
  contact.saveContact(req.body.name, req.body.email, req.body.message).then(retorno => {
    req.body = {};
    contact.render(req, res, null, 'Mensagem salva com sucesso');
  }).catch(err => {
    contact.render(req, res, err.message, null);
  });
});



module.exports = router;
