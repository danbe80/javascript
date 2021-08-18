'use strict';
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Fnction declaration
// function name(param1, param2) { body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello(){
	console.log('Hello');
}
printHello();

function log(msg){ // 변수의 타입을 정할 수 없어서 곤란...;
	console.log(msg);
}
log('Hello!');
log(12345); // 숫자로 전달하지만 string으로 출력

// 2. Parameters
// premitive parameters: passed by value
//  object parameters: passed by reference
function changeName(obj){
	obj.name = 'coder';
}
const ellie =  { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){ // 지금은 이렇게
	/* if(from === undefined){
		form = 'unknown';
	} */ // 옛날에는 이렇게
	console.log(`${message} by ${from}`);
}
showMessage('Hi!'); // 두번째 파라미터를 보내지 않음 from undefined가 됨

// 4. Rest parameters (added in ES6)
function printAll(...args){ // 배열 형태로 전달 ['dream', 'coding', 'ellie']
	for(let i = 0; i<args.length; i++){
		console.log(args[i]);
	}

	for(const arg of args){
		console.log(arg);
	}

	args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope : 밖에서는 안을 볼 수 없고 안에서는 밖을 볼 수 있다.
let globalMessage = 'global' // global variable
function prinMessage(){
	let message = 'hello';
	console.log(message); // local variable
	console.log(globalMessage);
	function printAnother(){
		console.log(message);
		let childMessage = 'hello';
	}
	// console.log(childMessage); error
	// return undefined; 생략 가능
}
prinMessage();

// 6. Return a value
function sum(a, b){
	return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user){
	if(user.point > 10){
		// long upgrade logic...
	}
}

// good
function upgradeUser(user){
	if(user.point <= 10){
		return;
	}
	// long upgrade logic...
}

// First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend (hoisted)
// a function expression is created when the execution reaches it.
const print = function(){ // anonymous function (이름이 없는 함수)
	console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
	if(answer === 'love you'){
		printYes();
	} else{
		printNo();
	}
}
// anonymous function
const printYes = function(){
	console.log('yes!');
}
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
	console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function() {
// 	console.log('simplePrint!');
// }
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) =>{
	// do something more
	return a * b;
}

//  IIFE : Immediately Invoked Function Expression
(function hello(){
	console.log('IIFE');
})();
