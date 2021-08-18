// 1. String concatenation
console.log('my' + 'cat'); // my cat String
console.log('1' +2); // 12 String
console.log(`string literals: 1 + 2 = ${1 + 2}`)

// 2. Numeric operators
console.log(1 + 1); // add 2
console.log(1 - 1); // substract 0
console.log(1 / 1); // divide 1
console.log(1 * 1); // multiply 1
console.log(1 % 1); // remainder 1
console.log(1 ** 1); // exponentiation 8 (2의 3승)

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`value: ${preIncrement}, type: ${typeof preIncrement}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`value: ${postIncrement}, type: ${typeof postIncrement}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operatores
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal\

// 6. Logical operators: || (or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// &&(and), finds the first falsy value
console.log(`or: ${value1 || value2 || check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.someting
if(nullableObject != null){
	nullableObject.something;
}

function check(){
	for(let i =0; i < 10; i++ ){
		// wasting time
		console.log('ㅠㅠ');
	}
	return true;
}

// ! (not)
console.log(!value1); // true

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;

console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true


// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if(name === 'ellie'){
	console.log('Welcome, Ellie!');
} else if(name === 'coder'){
	console.log('You are amazing coder');
} else {
	console.log('unkwnon');
}

//  9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type check in TS
const browser = 'IE';
switch (browser){
	case 'IE':
		console.log('go away!');
		break;
	case 'Chrome':
	case 'Firefox': // 같은 메세지를 출력하기 때문에 묶음
		console.log('love you!');
		break;
	default:
		console.log('same all!');
		break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i =3;
while(i>0){
	console.log(`width: ${i}`);
	i--;
}

// do while loop, body code is executed first,
// then check the condition.
do{
	console.log(`do while: ${i}`);
	i--;
} while(i>0);

// for loop, for(begin; condition; step)
for(i=3; i>0; i--){
	console.log(`for: ${i}`);
}
for(let i=3; i>0; i = i -2){
	// inline variable declaration
	console.log(`inline variable for: ${i}`);
}

// nested loops
for(let i = 0; i<10; i++){
	for(let j= 0; j<10; j++){
		console.log(`i: ${i}, j: ${j}`);
	}
}

// Q1, Q2
for(let i =0; i<11; i++){
	if(i % 2 == 0){
		console.log(`q1 ${i}`);
	}
}

for(let i = 0; i < 11; i++){
	if(i > 8){
		break;
	}
	console.log(`q2: ${i}`);
}