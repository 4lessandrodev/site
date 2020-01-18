var conn = require('./db');

module.exports = {

  render(req, res, error, success) {
    res.render('contact', {
      title: 'Contato',
      body: req.body,
      error,
      success
    });
  },

  saveContact(name, email, message) {
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO tb_contacts(name, email, message, readMsg)
VALUES(?, ?, ?, ?)`, [
        name,
        email,
        message,
        1
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  getContacts() {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM tb_contacts`, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
};