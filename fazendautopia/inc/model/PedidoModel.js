class PedidoModel {
  constructor (buyer, itens, total, ecobag, freight, paymentMethod, deliveryType, deliveryAddress, note, status, plan, region) {
    this._id = null;
    this._date = new Date();
    this._buyer = buyer;
    this._itens = itens;
    this._total = total;
    this._ecobag = ecobag;
    this._freight = freight;
    this._paymentMethod = paymentMethod;
    this._deliveryType = deliveryType;
    this._deliveryAddress = deliveryAddress;
    this._note = note;
    this._status = status;
    this._plan = plan;
	this._region = region;
  }
  get buyer() {
    return this._buyer;
  }
  get itens() {
    return this._itens;
  }
  get total() {
    return this._total;
  }
  get ecobag() {
    return this._ecobag;
  }
  get freight() {
    return this._freight;
  }
  get paymentMethod() {
    return this._paymentMethod;
  }
  get deliveryType() {
    return this._deliveryType;
  }
  get deliveryAddress() {
    return this._deliveryAddress;
  }
  get note() {
    return this._note;
  }
  get status() {
    return this._status;
  }
  get plan() {
    return this._plan;
  }
  
  get region(){
  return this._region;
  }

  set buyer(value) {
    this._buyer = value;
  }
  set itens(value) {
    this._itens = value;
  }
  set total(value) {
    this._total = value;
  }
  set ecobag(value) {
    this._ecobag = value;
  }
  set freight(value) {
    this._freight = value;
  }
  set paymentMethod(value) {
    this._paymentMethod = value;
  }
  set deliveryType(value) {
    this._deliveryType = value;
  }
  set deliveryAddress(value) {
    this._deliveryAddress = value;
  }
  set note(value) {
    this._note = value;
  }
  set status(value) {
    this._status = value;
  }
  set plan(value) {
    this._plan = value;
  }
  
  set region(value){
  this._region = value;
  }

}