function checkСompare (a, b) {
    for (let key in a) {
      if (a[key] != b[key]) {
        return false;
      }
    return true;
    }
}
  
  
console.log(checkСompare({name: "vlad", age: [12, 2], 
                        albums: [{ name : 'Please Please Me', year : 1963 }]},
                        {name: "vlad", age: [12, 2], 
                        albums: [{ name : 'Please Please Me', year : 1963 }]}));
