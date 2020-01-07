class FormaDePagamentoModel {
  constructor (discount, status, rules) {
    this._id = null;
    this._discount = discount;
    this._status = status;
	this._rules = rules;
  }
  get discount() {
    return this._discount;
  }
  get status() {
    return this._status;
  }
  set discount(value) {
    this._discount = value;
  }
  set status(value) {
    this._status = value;
  }
  
  get rules(){
	  return this._rules;
  }
  
  set rules(value){
  this._rules = value;
  }
}