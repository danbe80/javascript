'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2]; // 길이가 2인 배열이 만들어짐

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // undefined
console.log(fruits.length - 1); // 마지막 index 값

// 3. Looping over an array
// print all fruits

// a. for
console.clear();
for(let i = 0; i<fruits.length; i++){
	console.log(fruits[i]);
}

// b. for of
for(let i of fruits){
	console.log(i);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('strawberry', 'lemon');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'greenapple', 'watermelon'); 
// data를 넣기도 가능
console.log(fruits);

// combine two arrays
const fruits2 = ['pear',  'coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
// indexOf
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));
console.log(fruits.indexOf('coconut'));

// includes
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('coconut'));

// lastIndexOf
console.clear();
fruits.push('apple'); // 중복 Index값
console.log(fruits);
console.log(fruits.indexOf('apple')); // 가장 처음에 있는 index
console.log(fruits.lastIndexOf('apple'));// 가장 마지막에 있는

// toString() : array를 string으로 return
console.clear();
console.log(fruits);

const arr3 = [1, 2, 3];
console.log(arr3);
console.log(arr3.toString());

// toLocaleString([locales[, options]]) return String
const arr4 = ['a', 'b', 'c', new Date()];
const toString = arr4.toString();
const localeString = arr4.toLocaleString();

console.log(localeString); // 2021. 8. 24. 오후 11:51:48
console.log(toString); // Tue Aug 24 2021 23:51:48 GMT+0900 (한국 표준시)

// join() : 배열을 문자열로 연결해 반환 / 구분자가 있을 경우 구분자로 인해 구분

const joinString = arr4.join(''); 
console.log(joinString);// abcWed Aug 25 2021 00:03:06 GMT+0900 (한국 표준시)

// revers() : 배열 정렬을 반대로
const revarr4 = arr4.reverse();
console.log(revarr4);

// slice(start index, end index) : 시작 인덱스부터 끝인덱스 전까지 자른다.
const sarr4 = arr4.slice(1, 3);
console.log(sarr4);

// sort() : 배열 정렬 문자열의 유니코드 코드 포인트에 따라 정렬
const arr5 = [4, 2, 5, 1, 3];
const sortArray = arr5.sort(function(a, b){
	return b-a;
});
console.log(sortArray);

