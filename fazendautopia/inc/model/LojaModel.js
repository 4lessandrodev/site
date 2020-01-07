class LojaModel {
  constructor (socialName, cnpjRegister, zipCode, city, state, street, number, phone, email, status) {
    this._id = null;
    this._socialName = socialName;
    this._cnpjRegister = cnpjRegister;
    this._zipCode = zipCode;
    this._city = city;
    this._state = state;
    this._street = street;
    this._number = number;
    this._phone = phone;
    this._email = email;
    this._status = status;
  }
  get socialName() {
    return this._socialName;
  }
  get cnpjRegister() {
    return this._cnpjRegister;
  }
  get zipCode() {
    return this._zipCode;
  }
  get city() {
    return this._city;
  }
  get state() {
    return this._state;
  }
  get street() {
    return this._street;
  }
  get number() {
    return this._number;
  }
  get phone() {
    return this._phone;
  }
  get email() {
    return this._email;
  }
  get status() {
    return this._status;
  }

  set socialName(value) {
    this._socialName = value;
  }
  set cnpjRegister(value) {
    this._cnpjRegister = value;
  }
  set zipCode(value) {
    this._zipCode = value;
  }
  set city(value) {
    this._city = value;
  }
  set state(value) {
    this._state = value;
  }
  set street(value) {
    this._street = value;
  }
  set number(value) {
    this._number = value;
  }
  set phone(value) {
    this._phone = value;
  }
  set email(value) {
    this._email = value;
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