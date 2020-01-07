var conn = require('./db');
module.exports = {


  render(req, res, error) {

    res.render('admin/login', {
      body: req.body,
      error
    });

  },


  login(email, password) {
    return new Promise((resolve, reject) => {
      try {
        conn.query(`
      SELECT * FROM tb_user WHERE email = ?
      `, [
          email
        ], (err, results) => {
          if (err) {
            reject(err);
          } else {
            console.log(results);
            if (results.lenght > 0) {
              reject('Usuário ou senha incorretos');
            } else {
              let row = results[0];
              if (row == 'undefined' || row == null || row == '') {
                reject('Usuário ou senha incorretos');
              } else {
                if (row.password !== password) {
                  reject('Usuário ou senha incorretos');
                } else {
                  resolve(row);
                }
              }
            }
          }
        });
      } catch (error) {
        reject('Email inválido');
      }
    });
  }
};