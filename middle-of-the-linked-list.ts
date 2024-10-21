/*
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 
Constraints:
The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100

Runtime beats 100% of submitted solutions!
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function linkedListToArray(linked: ListNode): number[] {
    let arr = [];
    let head = linked;

    while (head != null){
        arr.push(head.val);
        head = head.next;
    };

    return arr;
};

function arrToLinked(arr: number[]): ListNode {
    let node = new ListNode(arr[0])
    let current = node

    let index = 1;
    let length = arr.length - 1;

    while (index <= length) {
        current.next = new ListNode(arr[index])
        current = current.next
        index++;
    };

    return node;
} 


function middleNode(head: ListNode | null): ListNode | null {
    let arr = linkedListToArray(head);

    let middle = Math.floor(arr.length/2);

    let slicedArr = arr.slice(middle);
    let node = arrToLinked(slicedArr);
    
    return node;
};
