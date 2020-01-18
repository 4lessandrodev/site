var conn = require('./db');

module.exports = {

  saveEmail(email) {
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO tb_inscriptions(emailNewsletter)
VALUES(?)`, [
        email
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  getEmails() {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM tb_inscriptions`, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
};