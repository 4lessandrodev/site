class fornecedorKeyModel {
  constructor (fornecedor) {
    this._fornecedor = fornecedor;
  }
  get fornecedor() {
    return this._fornecedor;
  }
  set fornecedor(value) {
    this._fornecedor = value;
  }
}