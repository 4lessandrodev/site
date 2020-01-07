class UsuarioModel {
  constructor (email, password) {
    this._id = null;
    this._email = email;
    this._password = password;
    this._date = new Date();
  }
  get id() {
    return this._id;
  }
  get email() {
    return this._email;
  }
  get password() {
    return this._password;
  }
  get registeredDate() {
    return this._date;
  }

  set id(value) {
    this._id = value;
  }

  set email(value) {
    this._email = value;
  }
  set password(value) {
    this._password = value;
  }

  set registeredDate(value) {
    this._date = value;
  }
}