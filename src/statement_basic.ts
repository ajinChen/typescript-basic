// Variable
// 1.var (function-scoped, same in python and JS)
// foo1 still exist if left the if block {}, but will disappear if left function
var foo1 = 123;
if (true) {
    var foo1 = 456;
}
console.log(foo1) // 456

function test() {
    var foo1 = 789;
}
test()
console.log(foo1) // 456


// 2.let (block-scoped, same in Java and C#)
// foo2 will disappear if left the if block {}
let foo2 = 123;
if (true) {
    let foo2 = 456;
}
console.log(foo2) // 123

// Best Practice: It's better to use let whenever possible. eg: for loop
for (let index = 0; index < 6; index++) {
    console.log(`Print Index ${index}`)
}

// 3. const (block-scoped, immutable value)
const immutNum: number = 12;
// but allow sub properties of objects to be mutated
const obj1 = {bar: 123};
obj1.bar = 456;
console.log(obj1);

// Statement
// 1.if statement
let x: number = 10;
let y: number = 20;

if (x > y) {
    console.log("greater")
} else {
    console.log("smaller")
}

if (x == y) {
    console.log("equal")
} else if (x > y) {
    console.log("greater")
} else if (x < y) {
    console.log("smaller")
}

// 2.Ternary Operator (boolean ? true statement : false statement)
x > y ? console.log("greater") : console.log("smaller");

// 2.switch statement
// return type of switch expression and case expression must match
switch (typeof x) {
    case "number":
        console.log("type of x is number");
        break;
    case "string":
        console.log("type of x is string");
        break;
    case "boolean":
        console.log("type of x is boolean");
        break;
    default:
        console.log("type of x is unknown");
        break;
}

// 3.for loop (use let/const)
// for Loop
for (let i = 0; i < 3; i++) {
    console.log(`Execute No.${i}`);
}
// forof Loop (iterate value)
let arr = [10, 20, 30, 40];
for (let val of arr) {
    console.log(`Output: ${val}`);
}
// forin Loop (iterate index)
for (let index in arr) {
    console.log(index);
    console.log(arr[index]);
}

// 4.while loop
// while loop (check before execute)
let i: number = 2;
while (i < 5) {
    console.log(i);
    i++;
}
// do-while loop (check after execute)
let j: number = 2;
do {
    console.log(j);
    j++;
} while (j < 5)

// 5.try-catch statement
try {
    console.log("statement1");
}
catch (err) {
    console.log(err);
}



