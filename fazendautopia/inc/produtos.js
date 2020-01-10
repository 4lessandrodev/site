var conn = require('./db');

module.exports = {

  getProdutos() {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT * FROM tb_produtos AS produto INNER JOIN tb_categoria_produtos As categoria 
      ON produto.category = categoria.id INNER JOIN tb_undmedida AS unidMedida ON  produto.unitMeansure = unidMedida.id
      WHERE produto.enabled = 1
      `, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  save(fields) {
    let query, params = [fields.description,
    fields.category, fields.status, fields.changes, 1];

    let code = parseInt(fields.id);
    //Editar produto
    if (code > 0) {
      params.push(code);
      query = `
      UPDATE tb_produtos
      SET description = ?,
      category = ?,
      status = ?,
      changes = ?,
      enabled = ?
      WHERE id = ?
      `;
      //Salvar novo produto
    } else {

      query = `INSERT INTO tb_produtos (description, category, status, changes, enabled)
VALUES(?, ?, ?, ?, ?)`;
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
      DELETE FROM tb_produtos WHERE id = ?
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
      UPDATE tb_produtos SET enabled = ? WHERE id = ?
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
  }

};