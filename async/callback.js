'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration
console.log('1'); // 동기
setTimeout(() => { // 비동기 실행
	console.log('2');
}, 1000);
console.log('3'); // 동기

// Synchronous callback 동기 콜백
function printImmediately(print) { // hoisting
	print();
}
printImmediately(() => console.log('hello')); // 동기

// Asynchronous callback 비동기 콜백
function printWithDeley(print, timeout) { // hoisting
	setTimeout(print, timeout);
}
printWithDeley(() => console.log('async callback'), 2000); // 비동기


// Callback Hell example
class UserStorage {
	loginUser(id, password, onSuccess, onError) {
		setTimeout(() => {
			if (
				(id === 'ellie' && password === 'dream') ||
				(id === 'coder' && password === 'academy')
			) {
				onSuccess(id);
			} else {
				onError(new Error('not found'));
			}
		}, 2000);
	}

	getRoles(user, onSuccess, onError) {
		setTimeout(() => {
			if (user === 'ellie') {
				onSuccess({
					name: 'ellie',
					role: 'admin'
				});
			} else {
				onError(new Error('on access'));
			}
		}, 1000);
	}
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
	id,
	password,
	(user) => {
		userStorage.getRoles(
			user,
			(userwithRole) => {
				alert(`Hello ${userwithRole.name}, you have a ${userwithRole.role} role`);
			},
			(error) => {
				console.log(error)
			})
	},
	(error) => {
		console.log(error)
	})