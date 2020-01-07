class UnidadeMedidaModel {
  constructor (description, status) {
    this._id = null;
    this._description = description;
    this._status = status;
  }

  get description() {
    return this._description;
  }
  set description(value) {
    this._description = value;
  }
  get status() {
    return this._status;
  }
  set status(value) {
    this._status = value;
  }
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }
}