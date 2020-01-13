var conn = require('./db');

module.exports = {

  getLojas() {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT * FROM tb_lojas AS fornecedores  WHERE enabled = 1;
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


    let query, params = [fields.socialName,
    fields.fantasyName, fields.cnpjRegister, fields.zipCode, fields.city, fields.province, fields.street, fields.numb, fields.phone, fields.email, fields.status, fields.district, 1];

    let code = parseInt(fields.id);
    //Editar fornecedor
    if (code > 0) {
      params.push(code);
      query = `
        UPDATE tb_lojas
        SET socialName = ?,
        fantasyName = ?,
        cnpjRegister = ?,
        zipCode = ?,
        city = ?,
        province = ?,
        street = ?,
        numb = ?,
        phone = ?,
        email = ?,
        status = ?,
        district = ?,
        enabled = ?
        WHERE id = ?
        `;
      //Salvar novo fornecedor
    } else {

      query = `INSERT INTO tb_lojas (socialName, fantasyName, cnpjRegister, zipCode, city, province, street, numb, phone, email, status, district, enabled)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
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

  //Deletar fornecedor
  delete(id) {
    return new Promise((resolve, reject) => {
      conn.query(`
        DELETE FROM tb_lojas WHERE id = ?
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

  //Desativar fornecedor
  disabled(id) {
    return new Promise((resolve, reject) => {
      conn.query(`
        UPDATE tb_lojas SET enabled = ? WHERE id = ?
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