var conn = require('./db');

module.exports = {
  getCategorias() {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT *
          FROM
            tb_categoria_cestas AS categoriasCestas WHERE enabled = 1;
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
    let query, params = [fields.description, fields.status, 1];

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
      query = `INSERT INTO tb_categoria_cestas (description, status, enabled)
      VALUES(?, ?, ?)`;
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
  },


  //Desativar a categoria
  disabled(id) {
    return new Promise((resolve, reject) => {
      conn.query(`
      UPDATE tb_categoria_cestas SET enabled = ? WHERE id = ?
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