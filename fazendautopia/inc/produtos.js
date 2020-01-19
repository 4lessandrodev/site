var conn = require('./db');
let path = require('path');

module.exports = {

  getProdutos() {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT * FROM tb_produtos AS produto INNER JOIN tb_categoria_produtos As categoria 
      ON produto.categoryProd = categoria.id INNER JOIN tb_undmedida AS unidMedida ON  produto.unitMeansureProd = unidMedida.id
      WHERE produto.enabledProd = 1
      `, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },


  getProdutosAtivos() {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT * FROM tb_produtos AS produto INNER JOIN tb_categoria_produtos As categoria ON produto.categoryProd = categoria.id WHERE produto.enabledProd = 1 AND produto.statusProd = 1
      `, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },



  save(fields, productSuppliersProd, files) {

    let imageProd = `images/uploads/${path.parse(files.imageProd.path).base}`;
    let query, params = [fields.nameProd, fields.nutrictionInformationProd, fields.categoryProd, fields.statusProd, fields.productTypeProd, fields.multiplyFactorProd, fields.salePriceProd, productSuppliersProd, 1, fields.unitMeansureProd];
    let queryPhoto = '';

    if (files.imageProd.name) {
      queryPhoto = ', imageProd = ?';
      params.push(imageProd);
    }


    let code = parseInt(fields.idProd);
    //Editar produto
    if (code > 0) {
      params.push(code);
      query = `
      UPDATE tb_produtos SET nameProd = ?, nutrictionInformationProd = ?, categoryProd = ?, statusProd = ?, productTypeProd = ?, multiplyFactorProd = ?, salePriceProd = ?, productSuppliersProd = ?, enabledProd = ?, unitMeansureProd = ?${queryPhoto} WHERE tb_produtos.idProd = ?
      `;

      //Salvar novo produto
    } else {

      if (!files.imageProd.name) {
        reject('Envie a imagem do produto');
      }

      query = `INSERT INTO tb_produtos (nameProd, nutrictionInformationProd,
      categoryProd, statusProd, productTypeProd, multiplyFactorProd, salePriceProd, productSuppliersProd, enabledProd, unitMeansureProd, imageProd)
VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    }

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

  //Deletar produto
  delete(id) {
    return new Promise((resolve, reject) => {
      conn.query(`
      DELETE FROM tb_produtos WHERE idProd = ?
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

  //Desativar um produto
  disabled(id) {
    return new Promise((resolve, reject) => {
      conn.query(`
      UPDATE tb_produtos SET enabledProd = ? WHERE idProd = ?
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

  getProdutosDeCesta(idCesta) {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM tb_cestas AS cesta INNER JOIN tb_itens_para_key as chave 
  INNER JOIN tb_produtos AS produtos WHERE cesta.idCesta = ? AND produtos.enabledProd = 1 
  AND produtos.statusProd = 1 AND cesta.itensCesta = chave.item_key;
      `, [
        idCesta
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