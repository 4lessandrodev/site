var conn = require('./db');

module.exports = {
  getCategorias() {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT *
          FROM
            tb_categoria_cestas AS categoriasCestas;
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
    let query, params = [fields.description, fields.status];

    let code = parseInt(fields.id);
    //Editar nova categoria
    if (code > 0) {
      params.push(code);
      query = `
      UPDATE tb_categoria_cestas
      SET description = ?,
      status = ?
      WHERE id = ?
      `;
      //Salvar nova categoria
    } else {
      query = `INSERT INTO tb_categoria_cestas (description, status)
      VALUES(?, ?)`;
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

  //Deletar categoria
  delete(id) {
    return new Promise((resolve, reject) => {
      conn.query(`
      DELETE FROM tb_categoria_cestas WHERE id = ?
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