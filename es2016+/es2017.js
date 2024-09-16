// Object.values(obj), Object.entries(obj)

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj)); // [[key, value], [key, value], ...]

// String Padding
console.log("abc".padStart(10)); // "        abc"

// Object.getOwnPropertyDescriptors(obj)
const obj2 = { a: 1, b: 2, [Symbol()]: 3 };
console.log(Object.getOwnPropertyDescriptors(obj2, "a"));
console.log(Object.getOwnPropertyDescriptors(obj2));

console.clear();

const obj3 = {
    get a() {
        return this.b;
    },
    set a(v) {
        console.log(v);
    }
}
obj3.a = 10;
console.log("obj3.a", obj3.a);
const obj4 = Object.assign({}, obj3);
obj4.a = 30;
console.log("obj4.a", obj4.a);

const newObj3 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj3));
newObj3.a = 30;
console.log("newObj3.a", newObj3.a);

// trailing commas
var arr = [1, 2, 3,];

var object = {
    foo: "bar",
    baz: "qwerty",
    age: 42,
};

function x(a, b,) {
    console.log(a, b);
}
x("a", "b");

// Async function (async & await)

async function fetchJson(url) {
    try {
        const req = await fetch(url);
        return await req.json();
    } catch (err) {
        console.log(`ERROR: ${err.stack}`);
    }
}

const json = fetchJson("https://api.github.com/user/1005");
console.log(json);