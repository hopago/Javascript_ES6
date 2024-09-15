const p = new Proxy(target, handler);

const a = { a: 1 };
Object.freeze(a);
Reflect.isExtensible(a); // false

const b = { b: 1 };
Reflect.isExtensible(b); // false

Reflect.preventExtensions(b);
b.a = 10;
console.log(b); // { b: 1 }

Object.defineProperties(b, "property1", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: 3,
});

/*
   용도
   1. 로깅 / 관찰
   2. 접근제한 (권한 - 읽기전용, 접근금지)
   3. 유효성 검증
*/

const target = {};
const proxy = new Proxy(target, {});

proxy.name = "Hopago";
console.log(proxy.name, target.name);

target.name = "Dopago";
console.log(proxy.name, target.name); // Dopago Dopago

console.log(proxy === target); // false

const target2 = { name: "Dopago" };
const proxy = new Proxy(target2, {
    set(trapTarget, key, value, receiver) {
        if (!trapTarget.hasOwnProperty(key)) {
            if (typeof value !== "number" || Number.isNaN(value)) throw new Error("이 프로퍼니는 숫자여야 합니다.")
        }

        return Reflect.set(trapTarget, key, value, receiver);
    }
})

proxy.name = "Hopago";
console.log(target.name, proxy.name);

proxy.count = 10;
console.log(proxy.count, target.count); // 10 10

proxy.age = "30살"; // 이 프로퍼니는 숫자여야 합니다.

console.log(proxy, target); // { name: "Hopago", count: 10 }

const proxy = new Proxy({}, {
    get(trapTarget, key, receiver) {
        if (!(key in receiver)) throw new TypeError(`Property ${key} doesn't exist.`);

        return Reflect.get(trapTarget, key, receiver);
    }
});

proxy.name = "proxy";
console.log(proxy.age);

// deleteProperty 트랩
"use strict"
const newTarget = { name: "tg", value: 10 };
Object.defineProperty(newTarget, "name", {
    configurable: false,
});
console.log(delete newTarget.name); // cannot delete property

const newTarget2 = { name: "tg", value: 10 };
const proxy = new Proxy(newTarget2, {
    deleteProperty(trapTarget, key) {
        return key === "value" ? false : Reflect.deleteProperty(trapTarget, key);
    }
})
console.log(delete proxy.value);

const obj = Object.defineProperties({
    a: { configurable: true, enumerable: true, writable: true, value: 10 },
    b: { configurable: false, enumerable: false, writable: true, value: 10 }
});

// 모든 프로퍼티 은닉화
const ProxyClass = (() => {
    const PROP = Symbol("PROP");
    const handler = {
        set(trapTarget, key, value) {
            trapTarget[PROP].set(key, value)
        },
        get(trapTarget, key) {
            return trapTarget[PROP].get(key)
        }
    }
    return class {
        constructor() {
            this[PROP] = new Map();
            return new Proxy(this, handler);
        }
    }
})();

// 한시적 접근 허용
const getUserInfo = userId =>
    fetch(`https://api.github.com/user/${userId}`)
        .then(res => res.json())
        .then(res => {
            let counter = 0;
            const pr = Proxy.revocable(res, {
                get(trapTarget, key) {
                    if (counter++ > 1) {
                        pr.revoke()
                    }

                    return res[key]
                }
            })

            return pr.proxy;
        })
        .catch(err => console.log(err));

getUserInfo(1003).then(r => {
    console.log(r.avatar_rul);
    console.log(r.id)
})