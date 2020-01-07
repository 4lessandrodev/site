class ClienteModel {
  constructor (userId, phone, name, zipCode, city, state, street, ibgeCode, region, deliveredRegion, numb) {
    this._id = null;
    this._userId = userId;
    this._phone = phone;
    this._name = name;
    this._zipCode = zipCode;
    this._city = city;
    this._state = state;
    this._street = street;
	this._number = numb;
    this._ibgeCode = ibgeCode;
    this._region = region;
    this._deliveredRegion = deliveredRegion;
  }

  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }
  get userId() {
    return this._userId;
  }
  set userId(value) {
    this._userId = value;
  }
  get phone() {
    return this._phone;
  }
  set phone(value) {
    this._phone = value;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get zipCode() {
    return this._zipCode;
  }
  set zipCode(value) {
    this._zipCode = value;
  }
  get city() {
    return this._city;
  }
  set city(value) {
    this._city = value;
  }
  get state() {
    return this._state;
  }
  set state(value) {
    this._state = value;
  }
  get street() {
    return this._street;
  }
  set street(value) {
    this._street = value;
  }
  
  get numb(){
  return this._numb;
  }

  get ibgeCode() {
    return this._ibgeCode;
  }
  set ibgeCode(value) {
    this._ibgeCode = value;
  }
  get region() {
    return this._region;
  }
  set region(value) {
    this._region = value;
  }
  get deliveredRegion() {
    return this._deliveredRegion;
  }
  set deliveredRegion(value) {
    this._deliveredRegion = value;
  }
  
  set numb(value){
  this._numb = value;
  }

}