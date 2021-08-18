// 1. Use strict
// added in ES5
// use this for Valina Javascript
'use strict'; // 자바스크립트가 너무 Dymanic하기 때문에 모던하게 											개발하기 위해 써주고 개발해주면 좋음

// 2. Variable :: 변수(변경될 수 있는 값)
// let (added in ES6)

{ // block scope
	let name = 'hyerin';
console.log(name);
name = 'hello';
console.log(name);
}

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
console.log(age); // undefined - var hoisting
	age = 4;
	var age;
console.log(age); // 4

// 3. Contants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive(더이상 나눠질 수 없는), single item : number, string, boolean, null, undefined, symbol
// object(여러 박스를 묶어서 하나로 관리), box container
// function, first-class function(function도 변수에 데이터 할당이 가능, function에 리턴도 가능, prameter 전달)

const count = 10; // integer
const size = 17.1 // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speical numeric value: infinity, -infinity, NaN
const infinty = 1 / 0; // infinty
const negativeinfinty = -1 / 0; // -infinty
const nAn = 'not a number' / 0; //NaN
console.log(infinty)
console.log(negativeinfinty)
console.log(nAn)

// bigInt (fairly new, don't use it yet)
const bigInt = 123456789123456789n; // bigInt(chrom, firefox만 사용가능)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brenden = 'brenden';
const greeting = 'hello' + brenden;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brenden}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id'); // 둘 심볼은 다름
console.log(symbol1 === symbol2); // false
const symbol1 = Symbol.for('id');
const symbol2 = Symbol.for('id');
console.log(symbol1 === symbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)

// object, real-life object, data structure
const hyerin = { name: 'hyerin', age: 20 };
hyerin.age = 21;

// 5. Dynamic typing : dynamically typed language
// JAVA, C 등 statically typed language
let txt = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${txt}, type: ${typeof txt}`); // string
txt = 1;
console.log(`value: ${txt}, type: ${typeof txt}`); // number
txt = '7' + 5;
console.log(`value: ${txt}, type: ${typeof txt}`); // string
txt = '8' / '2';
console.log(`value: ${txt}, type: ${typeof txt}`); // number
console.log(text.charAt(0)); // error
// 자바스크립트는 런타임 도중에 타입이 결정되는 것이 많기 때문에
// 이러한 에러가 런타임 도중에 많이 나는 이걸 보완하고자 나온 것이
// typescript이다. 