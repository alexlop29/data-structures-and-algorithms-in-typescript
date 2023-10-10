/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
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

 function linkedListToArray(linkedList: ListNode): number[] {
    let returnedArray = [];
    let head = linkedList;
    while ( head != null ) {
        returnedArray.push(head.val);
        head = head.next;
    }
    return returnedArray;
 };

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let sum: ListNode;
    let arr1 = Number(linkedListToArray(l1).reverse().join(""));
    let arr2 = Number(linkedListToArray(l2).reverse().join(""));
    let sumArr = (arr1 + arr2).toString().split("").reverse();
    console.log(sumArr.map(Number));
    return sum;
};
