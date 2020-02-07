// let obj1 = {
//   name: 'qw',
//   age: 12,
//   qwe: [1,2],
//   mobj: {
//     qwe: 'asd',
//     zxc: 1,
//   }
// }

// let obj2 = {
//   name: 'qw',
//   age: 12,
//   qwe: [1,2],
//   mobj: {
//     qwe: 'asd',
//     zxc: [22],
//   }
// }

let obj1 = [1,null]
let obj2 = [1,2]

// let obj1 = [1,2]
// let obj2 = [1,2]

function deepEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (let keys in obj1) {
        if (typeof obj1[keys] === "object" && typeof obj2[keys] === "object"){
            if (!deepEqual(obj1[keys], obj2[keys])){
                return false;
            }
        }
        if (typeof obj1[keys] !== "object" && typeof obj2[keys] !== "object"){
            if (obj1[keys] !== obj2[keys]){
              return false;
            }
        }
    }
    return true;
}


console.log(deepEqual(obj1,obj2));