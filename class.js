class HashStorageFunc{
  constructor(){
    this._obj = {};
  }
  addValues(key, values){
    this._obj[key] = values;
  }
  getValue(key){
    return this._obj[key];
  }
  deleteValue(key){
    if ([key] in this._obj){
      delete this._obj[key];
      return true;
    } else {
      return false;
    }
  }
  getKeys(){
    return Object.keys(this._obj);
  }
}

class ClassA extends HashStorageFunc{
  addAlc(key){
    this._obj[key] = `${this._obj[key]}; алкогольный: да`;
  }
}

class ClassB extends HashStorageFunc{
  addAlc(key){
    super.getValue(key)
    this._obj[key] = `алкогольный: да`;
  }
}

let classA = new ClassA();
let classB = new ClassB();
let drinkStorage = new HashStorageFunc();