/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/

type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    let initialValue = init;
    let ObjType: ReturnObj = {
        increment: () => init = init + 1,
        decrement: () => init = init - 1,
        reset: () => init = initialValue,
    };
    return ObjType
};
