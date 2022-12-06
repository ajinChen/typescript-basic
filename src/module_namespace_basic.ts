// Scope
// The TS code is in the global scope by default. If we have multiple files in a project
// the variables, functions, class etc. written in one file are accessible in all the other files
// TypeScript provides modules and namespaces to prevent the default global scope of the code and also to organize and maintain a large code base.

// Module
// use export keyword to mean this object can be accessed by other files
// 1. Export a module
export let age: number = 20; // can be accessed in other module if import this module
export function otherFileFounction(x: string): void {
    console.log(x);
}
let name: string = 'Ajin'; // cannot be accessed outside current module

// 2. Import a module
// Import export objects from a module
import { otherFileFounction, age } from "./<filename>";
console.log(age);
console.log(otherFileFounction);

// Import module into variable
import * as file from "./<filename>";
console.log(file.age);
console.log(file.otherFileFounction);

// Import renaming export objects from a module
import { otherFileFounction as func } from "./<filename>";
import { age } from "./<filename>";
console.log(age);
console.log(func);

// Namespace
// The namespace is used for logical grouping of functionalities. 
// A namespace can include interfaces, classes, functions and variables to support a single or a group of related functionalities.

// 1. Define a namespace
namespace StringUtility
{
    export function func1(x: string): string {
        return x.toUpperCase();
    }

    export function func2(y: number): number {
        return y;
    }
}
// 2. Export a namespace

/// <reference path="StringUtility.ts" />
console.log(StringUtility.func1("Ajin"));

