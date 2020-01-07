var conn = require('./db');

module.exports = {

  getUnidades() {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT * FROM tb_undmedida AS unidMedida;
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
    //console.log('FORMULARIO: ' + fields.description);

    //let categoria = new CategoriaProdutoModel();
    //categoria.description = fields.description;
    //categoria.status = fields.status;

    //console.log('CLASSE: ' + categoria.description);
    console.log('DESCRICAO ' + fields.description);
    console.log('STATUS ' + fields.status);

    let query, params = [fields.description,
    fields.status];

    let code = parseInt(fields.id);
    //Editar categoria
    if (code > 0) {
      params.push(code);
      query = `
      UPDATE tb_undmedida
      SET description = ?,
      status = ?
      WHERE id = ?
      `;
      //Salvar nova categoria
    } else {

      query = `INSERT INTO tb_undmedida (description, status)
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
      DELETE FROM tb_undmedida WHERE id = ?
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