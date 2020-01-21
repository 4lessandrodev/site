var conn = require('./db');

module.exports = {

  dashboard() {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT
        (SELECT 
          COUNT(*)
          FROM 
            tb_pedidosprovisorio) AS nrpedidos,
        (SELECT 
          COUNT(*)
          FROM 
            tb_cliente) AS nrclientes,
        (SELECT 
          COUNT(*)
          FROM
            tb_produtos) AS nrprodutos,
        (SELECT 
          COUNT(*)
          FROM 
            tb_cestas) AS nrcestas;
      `, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results[0]);
        }
      });
    });
  },

  getParams(req, params) {
    let param = Object.assign({
      user: req.session.user
    }, params);
    return param;
  }
};