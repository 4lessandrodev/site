var conn = require('./db');

module.exports = {

  getFornecedores() {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT * FROM tb_fornecedor AS fornecedores  WHERE enabled = 1;
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
        UPDATE tb_fornecedor
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

      query = `INSERT INTO tb_fornecedor (socialName, fantasyName, cnpjRegister, zipCode, city, province, street, numb, phone, email, status, district, enabled)
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
        DELETE FROM tb_fornecedor WHERE id = ?
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
        UPDATE tb_fornecedor SET enabled = ? WHERE id = ?
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
  },

  saveFornecedoresKey() {
    return new Promise((resolve, reject) => {
      conn.query(`
INSERT INTO tb_fornecedores_key ()
        VALUES();
      `, [], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  saveFornecedoresParaKey(fornecedor, id) {
    return new Promise((resolve, reject) => {
      conn.query(`
        INSERT INTO tb_fornecedor_para_key (fornecedor, fornecedor_key)
        VALUES(?, ?);
      `, [
        fornecedor,
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


  getLastFornecedorKey() {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT id
      FROM tb_fornecedores_key
      WHERE id = (SELECT MAX(id) FROM tb_fornecedores_key);
      `, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  getFornecedorSelection(chave) {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT * FROM tb_fornecedor_para_key AS chave WHERE chave.fornecedor_key = ?;
      `, [
        chave
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  getAllFornecedorSelection() {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT * FROM tb_fornecedor_para_key;
      `, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  //Deletar fornecedor
  deleteFornecedorKey(id) {
    return new Promise((resolve, reject) => {
      conn.query(`
        DELETE FROM tb_fornecedor_para_key where fornecedor_key =?;
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