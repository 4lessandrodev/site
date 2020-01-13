class ProdutoModel {
  constructor (image, name, category, salePrice, unitMeansure, productSuppliers, status, nutrictionInformation, productType, multiplyFactor) {
    this._id = null;
    this._image = image;
    this._name = name;
    this._category = category;
    this._salePrice = salePrice;
    this._registerDate = new Date();
    this._unitMeansure = unitMeansure;
    this._productSuppliers = productSuppliers;
    this._status = status;
    this._nutrictionInformation = nutrictionInformation;
    this._productType = productType;
    this._multiplyFactor = multiplyFactor;
  }

  get id() {
    return this._id;
  }
  get image() {
    return this._image;
  }
  get name() {
    return this._name;
  }
  get category() {
    return this._category;
  }
  get salesPrice() {
    return this._salesPrice;
  }
  get registerDate() {
    return this._registerDate;
  }
  get unitMeansure() {
    return this._unitMeansure;
  }
  get productSuppliers() {
    return this._productSuppliers;
  }
  get status() {
    return this._status;
  }
  get nutrictionInformation() {
    return this._nutrictionInformation;
  }
  get productType() {
    return this._productType;
  }
  get multiplyFactor() {
    return this._multiplyFactor;
  }


  set id(value) {
    this._id = value;
  }
  set image(value) {
    this._image = value;
  }
  set name(value) {
    this._name = value;
  }
  set category(value) {
    this._category = value;
  }
  set salesPrice(value) {
    this._salesPrice = value;
  }
  set registerDate(value) {
    this._registerDate = value;
  }
  set unitMeansure(value) {
    this._unitMeansure = value;
  }
  set productSuppliers(value) {
    this._productSuppliers = value;
  }
  set status(value) {
    this._status = value;
  }
  set nutrictionInformation(value) {
    this._nutrictionInformation = value;
  }
  set productType(value) {
    this._productType = value;
  }
  set multiplyFactor(value) {
    this._multiplyFactor = value;
  }

}