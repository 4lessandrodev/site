var express = require('express');
var produtos = require('./../inc/produtos');
var cestas = require('./../inc/cestas');
var inscricao = require('./../inc/inscricao');
var contact = require('./../inc/contact');
var clientUser = require('./../inc/clientUser');
var regiao = require('./../inc/regioes');
var pedidosProvisorio = require('./../inc/pedidosProvisorio');
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

//--------------LISTAR CESTAS------------------------

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

//-----------------CAPTURAR CESTA CLICADA------------

router.get('/cestas/:id', function (req, res, next) {
  cestas.getCestaPorId(req.params.id).then(retorno => {
    let cesta = retorno[0];
    cestas.getProdutosDeUmaCestaEspecifica(cesta.itensCesta).then(produtos => {
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

router.post('/cestas/:id', function (req, res, next) {
  cestas.getCestaPorId(req.params.id).then(retorno => {
    let cesta = retorno[0];
    cestas.getProdutosDeUmaCestaEspecifica(cesta.itensCesta).then(produtos => {
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


//-------------------------------------------------

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
//------------------------------------------------------

//--------------------------------------------------
router.get('/register', function (req, res, next) {
  regiao.getRegioes().then(regioes => {
    res.render('register', {
      title: 'Cadsatro',
      home: true,
      regioes
    });
  });
});


router.post('/register', function (req, res, next) {
  clientUser.saveUser(req.fields).then(user => {
    clientUser.getUser(req.fields).then(userId => {
      clientUser.saveClient(req.fields, userId[0].id).then(results => {
        clientUser.render('/login');
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


//-----------------------------------------------------


router.get('/carrinho', function (req, res, next) {
  if (!req.session.user) { res.redirect('/login'); return false; }
  let logedUser = req.session.user;
  clientUser.getClientByUserId(logedUser.id).then(clientLoged => {
    regiao.getRegioes().then(regioes => {
      res.render('carrinho', {
        title: 'Carrinho',
        home: true,
        cesta: [],
        produtos: [],
        clientLoged: clientLoged[0]
      });
    });
  });
});


//-----------------------------------------------------

router.post('/personalizar', function (req, res, next) {
  contact.saveContact(req.body.name, req.body.email, req.body.message).then(retorno => {
    req.body = {};
    contact.render(req, res, null, 'Item adicionado com sucesso');
  }).catch(err => {
    contact.render(req, res, err.message, null);
  });
});
//------------------------------------------------------

//---------------------PEDIDO PROVISORIO----------------


router.post('/pedido-provisorio', function (req, res, next) {
  pedidosProvisorio.save(req.fields).then(retorno => {
    console.log(req.fields);
  }).catch(err => {
    res.send(err);
  });
});

//--------------------FIM DO PEDIDO PROVISORIO----------

//------------------------------------------------------
router.use(function (req, res, next) {
  if (['/login'].indexOf(req.url) == -1 && !req.session.user) {
    res.redirect('/login');
  } else {
    next();
  }
});

router.get('/logout', function (req, res, next) {
  delete req.session.user;
  res.redirect('/login');
});

router.get('/carrinho', function (req, res, next) {
  res.render('carrinho');
});

router.post('/login', function (req, res, next) {
  if (!req.body.email) {
    clientUser.render(req, res, 'Informe um email');
  } else if (!req.body.password) {
    clientUser.render(req, res, 'Informe sua senha');
  } else {
    clientUser.login(req.body.email, req.body.password).then(user => {

      req.session.user = user;
      res.redirect('/');

    }).catch(err => {
      clientUser.render(req, res, err.message || err);
    });
  }
});

router.get('/login', function (req, res, next) {
  clientUser.render(req, res, null);
});

module.exports = router;
