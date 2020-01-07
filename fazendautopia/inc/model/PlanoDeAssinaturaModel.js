class PlanoDeAssinaturaModel {
  constructor (description, rules, status, discount, price, qtdItens) {
    this._id = null;
    this._description = description;
    this._rules = rules;
    this._status = status;
    this._discount = discount;
    this._price = price;
    this._qtdItens = qtdItens;
  }
  get id() {
    return this._id;
  }
  get description() {
    return this._description;
  }
  get rules() {
    return this._rules;
  }
  get status() {
    return this._status;
  }
  get discount() {
    return this._discount;
  }
  get price() {
    return this._price;
  }
  get qtdItens() {
    return this._qtdItens;
  }


  set id(value) {
    this._id = value;
  }
  set description(value) {
    this._description = value;
  }
  set rules(value) {
    this._rules = value;
  }
  set status(value) {
    this._status = value;
  }
  set discount(value) {
    this._discount = value;
  }
  set price(value) {
    this._price = value;
  }
  set qtdItens(value) {
    this._qtdItens = value;
  }
}