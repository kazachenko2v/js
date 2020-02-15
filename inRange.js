let arr = [-1, 2, ,0.5 ,20, 10, 3, 9];

function inRange(min, max) {
    return function (num) {
        return (num > min && num < max);
    }
}

console.log(arr.filter(inRange(0, 15)));