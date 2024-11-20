/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]

Constraints:
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
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

 function linkedToArray(node: ListNode): number[] {
    let arr = [];
    let current = node;
    while (current != null){
        arr.push(current.val);
        current = current.next;
    };
    return arr;
 }

 function arrayToLinked(arr: number[]): ListNode {
    let node = new ListNode(arr[0]);
    let head = node;
    let index = 1;
    let length = arr.length - 1;

    while (index <= length){
        head.next = new ListNode(arr[index]);
        head = head.next;
        index++;
    };

    return node;
 }

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let arr = linkedToArray(head);
    let remove = (arr.length) - n;
    arr.splice(remove, 1);
    if (arr.length == 0) return null;
    return arrayToLinked(arr);
};
