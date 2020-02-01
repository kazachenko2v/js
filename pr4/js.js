function maxNumber(a){
    let max = a[0];
    for (var i = 0; i < a.length; i++) { 
        if (max < a[i]) {
            max = a[i];
        } 
    }
    return max;
}

console.log(maxNumber([12,512,52321,531113]));