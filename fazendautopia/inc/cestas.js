var conn = require('./db');
let path = require('path');

module.exports = {

  //Selecionar todas as cestas e suas tabelas vinculadas
  getCestas() {
    return new Promise((resolve, reject) => {
      /**
       * SELECIONAR TODOS OS DADOS
       *  
      SELECT * FROM tb_cestas AS cesta INNER JOIN tb_categoria_cestas As categoria
      ON cesta.categoryCesta = categoria.id INNER JOIN tb_itens_para_key AS chave ON  cesta.itensCesta = chave.item_key
      INNER JOIN tb_produtos As produto ON chave.produtoCesta = produto.idProd
      WHERE cesta.enabledCesta = 1
       * 
       */
      conn.query(`
      SELECT * FROM tb_cestas AS cesta INNER JOIN tb_categoria_cestas As categoria ON cesta.categoryCesta = categoria.id WHERE cesta.enabledCesta = 1
      `, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },


  //Selecionar todas as cestas e suas tabelas vinculadas
  getCestasAtivas() {
    return new Promise((resolve, reject) => {
      /**
       * SELECIONAR TODOS OS DADOS
       *  
      SELECT * FROM tb_cestas AS cesta INNER JOIN tb_categoria_cestas As categoria
      ON cesta.categoryCesta = categoria.id INNER JOIN tb_itens_para_key AS chave ON  cesta.itensCesta = chave.item_key
      INNER JOIN tb_produtos As produto ON chave.produtoCesta = produto.idProd
      WHERE cesta.enabledCesta = 1
       * 
       */
      conn.query(`
      SELECT * FROM tb_cestas AS cesta INNER JOIN tb_categoria_cestas As categoria ON cesta.categoryCesta = categoria.id WHERE cesta.enabledCesta = 1 AND cesta.statusCesta = 1
      `, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },


  //Salvar uma cesta
  save(fields, itensCesta, files) {
    console.log(fields);

    let imageCesta = `images/uploads/${path.parse(files.imageCesta.path).base}`;
    let query, params = [fields.descriptionCesta, fields.categoryCesta, itensCesta, fields.statusCesta, fields.qtdItensCesta, fields.salesPriceCesta, fields.changesCesta, fields.nutrInfoCesta, 1];
    let queryPhoto = '';

    if (files.imageCesta.name) {
      console.log('NOME DA IMAGEM: ' + files.imageCesta.name);
      queryPhoto = ', imageCesta = ?';
      params.push(imageCesta);
    }


    let code = parseInt(fields.idCesta);
    //Editar uma cesta
    if (code > 0) {
      params.push(code);
      query = `
      UPDATE tb_cestas SET descriptionCesta = ?, categoryCesta = ?, itensCesta = ?, statusCesta = ?, qtdItensCesta = ?, salesPriceCesta = ?, changesCesta = ?, nutrInfoCesta = ?, enabledCesta = ? ${queryPhoto} WHERE tb_cestas.idCesta = ?
      `;

      //Salvar uma nova cesta
    } else {

      if (!files.imageCesta.name) {
        reject('Envie a imagem do produto');
      }

      query = `INSERT INTO tb_cestas (descriptionCesta, categoryCesta, itensCesta, statusCesta, qtdItensCesta, salesPriceCesta, changesCesta, nutrInfoCesta, enabledCesta, imageCesta)
VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    }

    console.log('QUERY: ' + query);
    console.log('PARAMS: ' + params);
    return new Promise((resolve, reject) => {
      conn.query(query, params, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  //Deletar uma cesta
  delete(id) {
    return new Promise((resolve, reject) => {
      conn.query(`
      DELETE FROM tb_cestas WHERE idCesta = ?
      `, [
        id
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  //Desativar uma cesta
  disabled(id) {
    return new Promise((resolve, reject) => {
      conn.query(`
      UPDATE tb_cestas SET enabledCesta = ? WHERE idCesta = ?
      `, [
        0, id
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  //Salvar uma chave 
  saveItensKey() {
    return new Promise((resolve, reject) => {
      conn.query(`
INSERT INTO tb_itens_key ()
        VALUES();
      `, [], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  //Salvar um chave vinculada a um produto 
  saveItensParaKey(item, id) {
    return new Promise((resolve, reject) => {
      conn.query(`
        INSERT INTO tb_itens_para_key (produtoCesta, item_key)
        VALUES(?, ?);
      `, [
        item,
        id
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  //Selecionar a ultima chave salva 
  getLastItemKey() {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT id
      FROM tb_itens_key
      WHERE id = (SELECT MAX(id) FROM tb_itens_key);
      `, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },


  //Selecionar uma chave vinculada a um produto especifico 
  getItensSelection(chave) {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT * FROM tb_itens_para_key AS chave WHERE chave.item_key = ?;
      `, [
        chave
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  getProdutosDeUmaCestaEspecifica(chaveItemDaCesta) {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT * FROM fazendautopia.tb_itens_para_key AS chave INNER JOIN fazendautopia.tb_produtos AS produtos WHERE chave.item_key = ? AND produtos.idProd = chave.produtoCesta AND produtos.enabledProd = 1 AND produtos.statusProd = 1
      `, [
        chaveItemDaCesta
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  //Selecionar todas as chaves vinculadas a um produto 
  getAllItensSelection() {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT * FROM tb_itens_para_key;
      `, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },


  //Deletar Item Key
  deleteItemKey(id) {
    return new Promise((resolve, reject) => {
      conn.query(`
        DELETE FROM tb_itens_para_key where item_key =?;
        `, [
        id
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  //Obter uma cesta pelo ID

  //SELECT * FROM fazendautopia.tb_cestas AS cesta INNER JOIN fazendautopia.tb_itens_para_key as chave 
  //INNER JOIN fazendautopia.tb_produtos AS produtos WHERE cesta.idCesta = 1 AND produtos.enabledProd = 1 
  //AND produtos.statusProd = 1 AND cesta.itensCesta = chave.item_key;

  //SELECT * FROM tb_cestas AS cesta WHERE cesta.idCesta = ?;
  getCestaPorId(id) {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM tb_cestas AS cesta WHERE cesta.idCesta = ?;
      `, [
        id
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

};