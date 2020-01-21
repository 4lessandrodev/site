var conn = require('./db');
module.exports = {


  render(req, res, error) {
    res.render('login', {
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
  },


  saveClient(fields, userId) {
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO tb_cliente (userId, phone, name, zipCode, city, street, numb, ibgeCode, province, region, deliveredRegion, enabled, zone)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
        userId, fields.phone, fields.name, fields.zipCode, fields.city, fields.street, fields.numb, fields.ibgeCode, fields.province, fields.region, fields.deliveredRegion, 0, fields.zone
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  saveUser(fields) {
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO tb_user (email, password, enabled)
        VALUES(?, ?, ?)`, [
        fields.email, fields.password, 0
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  getUser(fields) {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM tb_user AS userClient WHERE userClient.email = ?`, [
        fields.email
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  getClientByUserId(userId) {
    console.log('ENTROU NA FUNCAO: ' + userId);
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM tb_cliente AS clientLoged WHERE clientLoged.userId = ?`, [
        userId
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