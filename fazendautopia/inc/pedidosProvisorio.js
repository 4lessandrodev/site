var conn = require('./db');

module.exports = {

  save(fields) {


    let query, params = [fields.cliente, fields.observacoes, fields.total, fields.mainDescription];

    let code = parseInt(fields.id);
    //Editar fornecedor
    if (code > 0) {
      params.push(`${fields.status}`);
      params.push(`${code}`);
      query = `
        UPDATE tb_pedidosProvisorio
        SET cliente = ?,
        observacoes = ?,
        total = ?,
        mainDescription = ?, 
        status = ?
        WHERE id = ?
        `;
      //Salvar novo fornecedor
    } else {
      params.push('Em aberto');
      query = `INSERT INTO tb_pedidosProvisorio (cliente, observacoes, total, mainDescription, status)
        VALUES(?, ?, ?, ?, ?)`;
    }

    return new Promise((resolve, reject) => {
      console.log('PARAMETROS: ' + params);
      console.log('QUERY: ' + query);

      conn.query(query, params, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },


  getPedidos() {
    return new Promise((resolve, reject) => {
      conn.query(`
       SELECT * FROM tb_pedidosProvisorio;
      `, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },


  //Deletar um PEDIDO
  delete(id) {
    return new Promise((resolve, reject) => {
      conn.query(`
      DELETE FROM tb_pedidosProvisorio WHERE id = ?
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


};