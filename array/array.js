[10, 20, 30, 40, 50].indexOf(20); // 1
[10, 20, 30, 40, 50].findIndex(v => v === 30); // 2

const newArr = [...Array.from({ length: 10 }).fill(10)];
console.log(newArr);

// 타입배열

const buffer = new ArrayBuffer(2);
const view = new DataView(buffer);

// 객체

console.log(+0 == -0); // true
Object.is(+0, -0); // false

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
Object.is(NaN, NaN); // true

// Object.assign(target, src1, src2, ...);
const o1 = { a: 1, b: 2, c: 3 };
const o2 = { b: 2, c: 3 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b:2, c:3 }
obj.a = 10;
console.log(o1);
console.log(o2);
console.log(o3);

const obj2 = Object.assign({}, o1, o2, o3);
console.log(obj2);
obj2.a = 30;
console.log(o1);
console.log(o2);
console.log(o3);

console.clear();

const newObj = {
    a: 1,
    b: 2,
    [Symbol("d")]: 4,
};
Object.defineProperty(newObj, "c", {
    enumerable: false,
    value: 10
});
console.log(newObj); // { a: 1, b: 2 };

Object.getOwnPropertyDescriptors(newObj);