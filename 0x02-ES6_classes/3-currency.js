export default class Currency{
  constructor(code, name){
    this._code = code;
    this._name = name;
  }
  get code(){
    return this._code;
  };

  get name(){
    this._name = name
  }
  set code(code){
    this._code = code;
  };

  set name(){
    this._name = name;
  };

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
