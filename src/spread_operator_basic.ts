// Destructuring
// 1. Object Destructuring
let rect = {x: 0, y: 10, width: 15, height: 20};
let {x, y, width, height} = rect;
console.log(x, y, width, height);

let obj = {"some property": "some value"};
let {"some property": someProperty} = obj;
console.log(someProperty === "some value");

// 2. Object Destructuring with rest
let {w, x1, ...remaining} = {w: 1, x1: 2, y: 3, z: 4};
console.log(w, x1, remaining); // 1, 2, [3, 4]

// 3. Array Destructuring
let x2 = 1, y2 = 2;
[x2, y2] = [y2, x2];

// 4. Array Destructuring with rest
let [x3, , ...remaining1] = [1, 2, 3, 4];
console.log(x3, remaining1); // 1, [3, 4]

// Spread Operator
// 1. Spread Operator for function
function foo(x4:number, y4:number, z4:number) { };
let args: [number, number, number] = [0, 1, 2];
foo(...args);

// 2. Array Assignment
let list = [1, 2];
list = [...list, 3, 4];
console.log(list); // [1, 2, 3, 4]

// 3. Object Spread
const point2D = {x: 1, y: 2};
const point3D = {...point2D, z: 3};
const point5D = {...point2D, ...point3D};


