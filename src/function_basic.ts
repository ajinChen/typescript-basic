// 1. Define function with input and output type
function addValues(n1: number, n2: number): number {
    return n1 + n2;
}

// 2. Function Closure
// A function can use any variables defined in the outer scope
function outerFunction(arg: string) {
    const variableInOuterFunction = arg;
    function innerFunction() {
        console.log(variableInOuterFunction)
    }
    innerFunction();
}
outerFunction("This is Closure!");

// A function can use variables from the outer scope even after the outer function has return
function outerFunctionReturn(arg: string) {
    const variableInOuterFunction = arg;
    return function innerFunctionReturn() {
        console.log(variableInOuterFunction)
    }
}
let innerFunction = outerFunctionReturn("This is Closure even has return!");
innerFunction()

// 