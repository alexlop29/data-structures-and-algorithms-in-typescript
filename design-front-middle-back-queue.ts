/*
Design a queue that supports push and pop operations in the front, middle, and back.

Implement the FrontMiddleBack class:

FrontMiddleBack() Initializes the queue.
void pushFront(int val) Adds val to the front of the queue.
void pushMiddle(int val) Adds val to the middle of the queue.
void pushBack(int val) Adds val to the back of the queue.
int popFront() Removes the front element of the queue and returns it. If the queue is empty, return -1.
int popMiddle() Removes the middle element of the queue and returns it. If the queue is empty, return -1.
int popBack() Removes the back element of the queue and returns it. If the queue is empty, return -1.
Notice that when there are two middle position choices, the operation is performed on the frontmost middle position choice. For example:

Pushing 6 into the middle of [1, 2, 3, 4, 5] results in [1, 2, 6, 3, 4, 5].
Popping the middle from [1, 2, 3, 4, 5, 6] returns 3 and results in [1, 2, 4, 5, 6].
 

Example 1:

Input:
["FrontMiddleBackQueue", "pushFront", "pushBack", "pushMiddle", "pushMiddle", "popFront", "popMiddle", "popMiddle", "popBack", "popFront"]
[[], [1], [2], [3], [4], [], [], [], [], []]
Output:
[null, null, null, null, null, 1, 3, 4, 2, -1]

Explanation:
FrontMiddleBackQueue q = new FrontMiddleBackQueue();
q.pushFront(1);   // [1]
q.pushBack(2);    // [1, 2]
q.pushMiddle(3);  // [1, 3, 2]
q.pushMiddle(4);  // [1, 4, 3, 2]
q.popFront();     // return 1 -> [4, 3, 2]
q.popMiddle();    // return 3 -> [4, 2]
q.popMiddle();    // return 4 -> [2]
q.popBack();      // return 2 -> []
q.popFront();     // return -1 -> [] (The queue is empty)
*/

class FrontMiddleBackQueue {
    queue: Number[];

    constructor() {
      this.queue = [];
    }

    pushFront(val: number): void {
      console.log(this.queue)
      this.queue.unshift(val);
    }

    pushMiddle(val: number): void {
      console.log(this.queue)
      let queueLength = this.queue.length;
      if (queueLength == 1) {
        this.queue.push(val)
      }
      else {
       let midQueueLength = Math.trunc((queueLength)/2);
       this.queue.splice(midQueueLength, 0, val);
      }
    }

    pushBack(val: number): void {
      console.log(this.queue)
      this.queue.push(val);
    }

    popFront(): number {
      console.log(this.queue)
      const default_num: number = -1;
      if (this.queue.length == 0) {
        return default_num
      }
      let poppedVal:number = this.queue.shift() as number;
      return poppedVal;
    }

    popMiddle(): number {
      console.log(this.queue)
      const default_num: number = -1;
      let queueLength = this.queue.length;
      if (queueLength == 0) {
        return default_num
      }
      if (queueLength == 2) {
        return this.queue.shift() as number
      }
      let midQueueLength = Math.trunc((queueLength)/2);
      if ( queueLength % 2 == 0) {
        let poppedVal:Number[] = this.queue.splice(midQueueLength-1, 1)
        return poppedVal[0] as number
      }
      let poppedVal:Number[] = this.queue.splice(midQueueLength, 1)
      return poppedVal[0] as number
    }

    popBack(): number {
      console.log(this.queue)
      const default_num: number = -1;
      if (this.queue.length == 0) {
        return default_num
      }
      let poppedVal:Number = this.queue.pop()
      return poppedVal as number
    }
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
