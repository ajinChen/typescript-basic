function outerFunctionReturn(arg: string) {
    let variableInOuterFunction = arg;
    return function innerFunctionReturn() {
        console.log(variableInOuterFunction)
    }
}
let innerFunction = outerFunctionReturn("This is Closure even has return!");
innerFunction()


// console.log(typeof result);
// console.log(result);
