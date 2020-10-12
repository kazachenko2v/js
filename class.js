class HashStorageFunc{
  constructor(){
    this.obj = {};
  }
  addValues(key, values){
    this.obj[key] = values;
  }
  getValue(key){
    return this.obj[key];
  }
  deleteValue(key){
    if ([key] in this.obj){
      delete this.obj[key];
      return true;
    } else {
      return false;
    }
  }
  getKeys(){
    return Object.keys(this.obj);
  }
}

class ClassA extends HashStorageFunc{
  addAlc(key){
    this.obj[key] = `${this.obj[key]}; алкогольный: да`;
  }
}

class ClassB extends HashStorageFunc{
  deleteValue(key){
    super.deleteValue(key)
    console.log(`напиток ${key} удален`);
  }
}

let classA = new ClassA();
let classB = new ClassB();
let drinkStorage = new HashStorageFunc();


classB.addValues('1', 'qew');
classB.addValues('2', 'asd');
classB.addValues('3', 'zxc');
console.log(classB.getKeys());
classB.deleteValue('1');
console.log(classB.getKeys());