/** MODULE 개념 */
/*
   용도에 따라 여러 코드조각들을 파일 단위로 나눠 분류한 것
*/

// 1) IIFE, name space 활용
$.ready(function () {

});

(function () {

})();

var NAME_SPACE = {};
NAME_SPACE.module1 = function () {

};

// ::COMMON JS

// proxy에 정의된 sum
module.exports = {
    sum: function (a, b) {
        return a + b;
    }
}

var sum = require("./proxy.js").sum;
sum(1, 3);

/* ex */
// math.js
module.exports = {
    multiply: function (a, b) {
        return a * b
    }
}

// sub1.js
const multiply = require("./math.js").multiply;
module.exports = {
    multiplyAndPlusTwo: function (a, b) {
        return multiply(a, b) + 2;
    }
}

// main.js
const mAp = require("./sub1.js").multiplyAndPlusTwo;
mAp(10, 30); // 302

// ES6
import axios from "axios";

export {
    name1,
    name2,
    name3,
}

export const a = Math.sqrt(2);

export default function() {

}

export * as moduleJS from "module.js";

// ES6 - import
import { member1, member2 } from "module-name";
import * as mN from "module-name";
import "module-name.css";
import member1, { member2 as m2, member3 } from "module-name";
