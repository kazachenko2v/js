function summ(a) {
  let s = 0;
  for( let i = 0; i < a.length; ++i) {
      s += a[i];
  }
  return s;
}

console.log(summ([1, 2, 4, 11, 1111]));
