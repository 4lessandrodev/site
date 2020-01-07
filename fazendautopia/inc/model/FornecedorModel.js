class FornecedorModel {
  constructor (socialName, cnpjRegister, zipCode, city, state, street, numb, phone, email, status, district) {
    this._id = null;
    this._socialName = socialName;
    this._fantasyName = fantasyName;
    this._cnpjRegister = cnpjRegister;
    this._zipCode = zipCode;
    this._city = city;
    this._state = state;
    this._street = street;
    this._numb = numb;
    this._phone = phone;
    this._email = email;
    this._status = status;
    this._district = district;
  }
  get socialName() {
    return this._socialName;
  }
  get fantasyName() {
    return this._fatansyName;
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
  get numb() {
    return this._numb;
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

  get district() {
    return this._district;
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
  set numb(value) {
    this._numb = value;
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
  set district(value) {
    this._district = value;
  }
  set fantasyName(value) {
    this._fatansyName = value;
  }
}