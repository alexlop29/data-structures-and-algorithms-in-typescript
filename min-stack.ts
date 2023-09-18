/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]
*/

class MinStack {
    minStack: number[];

    constructor(minStack: number[] = []) {
        this.minStack = minStack;
    }

    push(val: number): void {
        this.minStack.unshift(val);
    }

    pop(): void {
        this.minStack.shift();
    }

    top(): number {
        return Number(this.minStack[0])
    }

    getMin(): number {
        let minNum: Number;
        this.minStack.forEach((value, index) => {
            if (index == 0){
                minNum = value;
            }

            if (Number(value) < Number(minNum)) {
                minNum = value;
            }
        });
        return Number(minNum);
    }
}
