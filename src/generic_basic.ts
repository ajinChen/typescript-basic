// Generic <T> (preserving type info)
// Generics uses the type variable <T>, a special kind of variable that denotes types.
// The type variable remembers the type that the user provides and works with that particular type only. This is called preserving the type information.

// 1.Single Type Variable
// use <T> to pass T inside and use T to replace any Type variable
function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}
let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Ajin", "like", "Holiday"]);

// 2.Multiple Type Variables



// 3.