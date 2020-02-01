function summ(a) {
    let s = 0;
    for( let i = 0; i < a.length; ++i) {
        if (typeof(a[i]) === 'object') {
            s += summ(a[i]);
        } else {
            s += a[i];
        }
    }
    return s;
}

console.log(summ([1, 2, [2, [2], 2, [2,[20]]]]));
