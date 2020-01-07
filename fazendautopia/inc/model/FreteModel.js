class FreteModel {
  constructor (origin, destin, price) {
    this._id = null;
    this._origin = origin;
    this._destin = destin;
    this._price = price;
  }
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }
  get origin() {
    return this._origin;
  }
  set origin(value) {
    this._origin = value;
  }
  get destin() {
    return this._destin;
  }
  set destin(value) {
    this._destin = value;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
}