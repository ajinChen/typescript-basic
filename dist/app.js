"use strict";
function outerFunctionReturn(arg) {
    let variableInOuterFunction = arg;
    return function innerFunctionReturn() {
        console.log(variableInOuterFunction);
    };
}
let innerFunction = outerFunctionReturn("This is Closure even has return!");
innerFunction();
//# sourceMappingURL=app.js.map