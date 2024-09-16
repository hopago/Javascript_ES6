// Array.prototype.includes(elem[, fromIndex])

console.log([1, 2, 3].indexOf(2) > -1);
console.log([1, 2, 3].includes(4));
console.log([1, 2, NaN].includes(NaN));

console.log(["a", "b", "c"].includes("a")); // true
console.log(["a", "b", "c"].includes("a", 1)); // false

// **, 제곱수 표현
console.log(Math.pow(10, 2) === 10 ** 2); // true

let a = 3;
a **= 4;
console.log(a);