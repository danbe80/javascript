// async & await
// clear style fo using promise :)

// 1. async
async function fetchUser() {
	// do network request in 10 secs...
	return 'ellie';
}

const user = fetchUser();
user.then(console.log)
console.log(user);

// 2. await
function delay(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
	await delay(1000);
	return 'apple';
}

async function getBanana() {
	await delay(1000);
	return 'banana';
}

/*
async await 사용 전 
function pickFruits(){
	return getApple()
	.then(apple => {
		return getBanana()
		.then(banana => `${apple} + ${banana}`);
	});
} */

async function pickFruits() {
	const applePromise = getApple();
	const bananaPromise = getBanana(); //Promise는 생성되자마자 실행하는 특징 이용 but 여기는 코드가 지저분함 Promise APIs를 이용 Go!
	const apple = await applePromise;
	const banana = await bananaPromise;
	return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() { // 동시에 준비를 끝내 출력 Promise는 생성되자마자 실행하는 특징 이용
	return Promise.all([getApple(), getBanana()])
	.then(fruits => fruits.join(' + '));
}

pickFruits().then(console.log);

function pickOnlyFruits(){ // 가장 먼저 준비를 끝낸 함수부터 출력
	return Promise.race([getApple(), getBanana()])
	.then(fruits => fruits.join(' + '));
}

pickFruits().then(console.log);