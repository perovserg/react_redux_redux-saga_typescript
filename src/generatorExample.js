function* generatorExample() {
	for (let i = 0; i < 5; i++) {
		yield i;
	}
}

const iter = generatorExample();

console.log(iter.next()); // { value: 0, done: false }
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: 4, done: false }
console.log(iter.next()); // { value: undefined, done: true }
console.log(iter.next()); // { value: undefined, done: true }
console.log(iter.next()); // { value: undefined, done: true }
