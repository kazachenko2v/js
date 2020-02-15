function HashStorageFunc(){
  this._obj = {};
  this.addValues = function (key, values) {
      this._obj[key] = values;
  };
  this.getValue = function (key) {
      return this._obj[key];
  };
  this.deleteValue = function (key) {
      if ([key] in this._obj) {
          delete this._obj[key];
          return true;
      } else {
          return false;
      }
  };
  this.getKeys = function () {
      return Object.keys(this._obj);
  };
}

function ClassA(){
  HashStorageFunc.call(this);
  this.addAlc = function(key){
      this._obj[key] = `${this._obj[key]}; алкогольный: да`;
  };
}

function ClassB(){
  HashStorageFunc.call(this);
  let clear = this.deleteValue;
  this.deleteValue = function(){
      clear.call(this);
      this._obj = {};
  };
}

let classA = new ClassA();
let classB = new ClassB();
let drinkStorage = new HashStorageFunc();
