class CategoriaCestasModel {
  constructor (description, status, changes) {
    this._id = null;
    this._description = description;
    this._status = status;
  }
  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
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

}