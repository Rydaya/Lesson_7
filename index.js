//1
console.log('Task 1');

function makeCounter() {
	let count = 0;
	return function counter() {
		return console.log(++count);
	}
}

let func = makeCounter();

func();
func();
func();
func();

//2
console.log('Task 2');

function makeGenerator() {
  //тут создаем массив от 1 до 100 
  let array = [];
  for(let i = 1; i <= 100; i++) {
    array.push(i);
  }
	return function generator() {
		let randomIndex = Math.floor(Math.random() * array.length);
		const value = array[randomIndex];
		array.splice(randomIndex, 1);
		return value;
  	}
}

let randomNumber = makeGenerator();

console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());

//3
console.log('Task 2');
function createFunctions(){
	let arrayOfFunctions = [];
	for(let i = 0; i < 5; i++) {
		let func = function(){
			let index = i;
			return index;
		};
		arrayOfFunctions.push(func);
	}
	return arrayOfFunctions;
}

var callback = createFunctions();

console.log(callback[0]());
console.log(callback[3]());

