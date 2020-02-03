function getParams() {
     let a = prompt('Введите a');
     let b = prompt('Введите b');
     let c = prompt('Введите c');
     if (a === 0) {
          return [];
     } else {
          return [a, b, c];
     }
}

function solve() {
     const p = getParams();
     let result = [];
     if (p.length === 0) {
        return result;
     } 
     let D = p[1] * p[1] - 4 * p[0] * p[2];

     if (D === 0) {
          let x = -p[1] / (2 * p[0]);
          result = [x];
     } else if (D > 0) {
          let x1 = (-p[1] + Math.sqrt(D)) / (2 * p[0]);
          let x2 = (-p[1] - Math.sqrt(D)) / (2 * p[0]);
          result = [x1, x2];
     }
     return result;
}

function getResult() {
     let result = solve();
     if (result.length === 2) {
          console.log('два корня');
     } else if (result.length === 1) {
          console.log('один корень');
     } else {
          console.log('ничего');
     }
}

getResult();