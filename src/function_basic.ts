// 1. Named Functions with input and output type
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

// 3. Anonymous Function
let greetingFunction = function(author: string): void {
    console.log(`Greeting by ${author}`)
};
greetingFunction("Ajin");

// 4. Optional Parameters in function (arg?: type)
// ? means optional arg and means it accept undefined type
let greetingOptional = function(author: string, date?: number): void {
    console.log(`Greeting by ${author} in ${date}`)
};
greetingOptional("Ajin", 20221204);
greetingOptional("Ajin");

// 5. Default Parameters (pass in undefined to get default value)
let greetingDefault = function(author: string, date: number = 2022): void {
    console.log(`Greeting by ${author} in ${date}`)
};
greetingDefault("Ajin", 20221204);
greetingDefault("Ajin");
greetingDefault("Ajin", undefined);

// 6. Arrow Functions (lambda functions)
// (param1: type1, param2: type2): returnType => { expression }
let sumArrow = (x: number, y: number): number => {
    return x + y;
};
// if only has 1 statement in function
let sumArrowFurther = (x: number, y: number): number => x + y;
sumArrow(3, 4);
sumArrowFurther(3, 4);

// 7. Function Overloading
// TS allow multiple functions with the same name but different param types and return types
// But the number of parameters should be the same
function minus(a: number, b: number): number;
function minus(a: string, b: string): string;
function minus(a: any, b: any): any {
    return a + b;
}

// 8. Rest Parameters (...), Must be last one
// Use rest parameters when you don't know how many parameters a function will receive
// Use an array type for rest parameters
function GreetMany(greeting: string = 'Hi', ...names: string[]): string {
    return greeting + " " + names.join(", ") + "!";
}
GreetMany("Hi", "Ajin", "Danyang");
GreetMany(undefined, "Ajin", "Danyang");
GreetMany();




