var conn = require('./db');

module.exports = {

  getCategorias() {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT * FROM tb_categoria_produtos AS categoriasProd WHERE enabled = 1;
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

    let query, params = [fields.description,
    fields.status, 1];

    let code = parseInt(fields.id);
    //Editar categoria
    if (code > 0) {
      params.push(code);
      query = `
      UPDATE tb_categoria_produtos
      SET description = ?,
      status = ?,
      enabled = ?
      WHERE id = ?
      `;
      //Salvar nova categoria
    } else {

      query = `INSERT INTO tb_categoria_produtos (description, status, enabled)
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
      DELETE FROM tb_categoria_produtos WHERE id = ?
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
      UPDATE tb_categoria_produtos SET enabled = ? WHERE id = ?
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