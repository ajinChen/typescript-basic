function addFunc(n1: number, n2: number) {
	return n1 + n2;
}

function printResultFunc(num: number): void {
	console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2;
	cb(result);
}

printResultFunc(addFunc(5, 12));


let combineValues: (a: number, b: number) => number;
combineValues = addFunc;
console.log(combineValues(8, 8));


addAndHandle(10, 20, (result: number) => {
	console.log(result);
})