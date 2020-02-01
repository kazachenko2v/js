function uniq(a) {
    b = [];
    for(let i = 0; i < a.length; i++) 
        if (!b.includes(a[i])) {
            b.push(a[i]);
        }
    return b;
}


console.log(uniq([1,2,2,4,4,6,1513,12,1,2]));