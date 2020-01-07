class CestaModel {
  constructor (image, description, category, itens, status, qtdItens, salePrice, nutrictionInformation, changes) {
    this._id = null;
    this._image = image;
    this._description = description;
    this._category = category;
    this._itens = itens;
    this._status = status;
    this._qtdItens = qtdItens;
    this._salePrice = salePrice;
    this.__nutrictionInformation = nutrictionInformation;
    this._changes = changes;
  }
  get id() {
    return this._id;
  }
  get image() {
    return this._image;
  }
  get description() {
    return this._description;
  }
  get category() {
    return this._category;
  }
  get itens() {
    return this._itens;
  }
  get status() {
    return this._status;
  }
  get qtdItens() {
    return this._qtdItens;
  }
  get salePrice() {
    return this._salePrice;
  }
  get nutrictionInformation() {
    return this._nutrictionInformation;
  }

  get changes() {
    return this._changes;
  }



  set changes(value) {
    this._changes = value;
  }

  set id(value) {
    this._id = value;
  }
  set image(value) {
    this._image = value;
  }
  set description(value) {
    this._description = value;
  }
  set category(value) {
    this._category = value;
  }
  set itens(value) {
    this._itens = value;
  }
  set status(value) {
    this._status = value;
  }
  set qtdItens(value) {
    this._qtdItens = value;
  }
  set salePrice(value) {
    this._salePrice = value;
  }
  set nutrictionInformation(value) {
    this._nutrictionInformation = value;
  }
}