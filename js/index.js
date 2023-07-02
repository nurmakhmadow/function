function mini(a, b) {
  if (typeof a === 'number') {
    return Math.min(a, b);
  } else if (Array.isArray(a)) {
    return Math.min(...a);
  } else if (typeof a === 'object' ) {
    let valuesA = Object.values(a)
    let valuesB = Object.values(b)
    let allValues = [...valuesA, ...valuesB];
    return Math.min(...allValues);
  }
}




console.log(
  mini(1, -2),
  mini([1, 2]),
 mini({a:5}, {b:-7}),
  mini({ a: 7, b: -11 }, { a: -20, b: 77 })
 
);