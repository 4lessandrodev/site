var conn = require('./db');

module.exports = {

  getRegioes() {
    return new Promise((resolve, reject) => {
      conn.query(`
       SELECT * FROM tb_regiao AS regioes  WHERE enabled = 1;
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
    fields.status, 1];

    let code = parseInt(fields.id);
    //Editar regiao
    if (code > 0) {
      params.push(code);
      query = `
      UPDATE tb_regiao
      SET description = ?,
      status = ?,
      enabled = ?
      WHERE id = ?
      `;
      //Salvar nova regiao
    } else {

      query = `INSERT INTO tb_regiao (description, status, enabled)
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

  //Deletar regiao
  delete(id) {
    return new Promise((resolve, reject) => {
      conn.query(`
      DELETE FROM tb_regiao WHERE id = ?
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

  //Desativar uma regiao
  disabled(id) {
    return new Promise((resolve, reject) => {
      conn.query(`
      UPDATE tb_regiao SET enabled = ? WHERE id = ?
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