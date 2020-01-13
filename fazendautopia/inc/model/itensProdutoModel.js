class itensProdutoModel {
  constructor (item, ordem) {
    this._item = item;
    this._ordem = ordem;
  }
  get item() {
    return this._item;
  }
  set item(value) {
    this._item = value;
  }
  get ordem() {
    return this._ordem;
  }
  set ordem(value) {
    this._ordem = value;
  }
}