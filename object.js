// object란?
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of object
// object = {key: value};

// 1. Literals and properties
const obj1 = {}; // 'object literal' systax
const obj2 = new Object(); // 'object constructor' systax

function print(person){
	console.log(person.name);
	console.log(person.age);
}

const ellie =  {name: 'ellie', age: 4};
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true; // 추가도 가능
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob // 삭제도 가능

// 2.Computed properties 계산된 속성
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);//어떤 타입의 키를 가져올지 모를 때
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key){
	console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age')

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 }
const person2 = { name: 'steve', age: 3 }
const person3 = { name: 'dave', age: 4 }
const person4 = new Person('ellie', 30);

console.log(person4);

/* function makePerson(name, age){
	return {
		name,
		age
	}; // class같은 template 같은 부분
} */
// 4. Constructor Function
function Person(name, age){
	// this = {};
	this.name = name;
	this.age = age;
	// return this;
}

// 5. in operator: property existence check (key in obj)
// 해당 Object 안에 key가 있는지 check
console.log('name' in ellie); // true
console.log('age' in ellie); // true
console.log('random' in ellie); // false
console.log(ellie.random) // undefined

// 6. for..in vs for..of
// for(key in obj)
console.clear(); // 전에 출력한 로그들 삭제
for(key in ellie){
	console.log(key);
}

// for (value of iterable) 순차적으로
const array = [1,2,3,4,5];
/* for(let i =0; i<array.length; i++){

} */
for (value of array){
	console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);

// old way
const user3 = {}
for(key in user){
	user3[key] = user[key]; // 첫번째 키: name , 두번째 키: age
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);