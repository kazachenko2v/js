function HashStorageFunc() {
  let obj = {};
  this.addValues = function (key, values) {
    obj[key] = values;
  }
  this.getValue = function (key) {
    return obj[key];
  }
  this.deleteValue = function (key) {
    if ([key] in obj) {
      delete obj[key];
      return true;
    } else {
      return false;
    }
  }
  this.getKeys = function () {
    return Object.keys(obj);
  }
}

let drinkStorage = new HashStorageFunc();

drinkStorage.addValues('Маргарита', 'алкогольный, рецепт: продукт, продукт, продукт...');
drinkStorage.addValues('Напиток', 'безалкогольный, рецепт: продукт, продукт, продукт...');
console.log(drinkStorage.getKeys());
console.log(drinkStorage.getValue('Маргарита'));