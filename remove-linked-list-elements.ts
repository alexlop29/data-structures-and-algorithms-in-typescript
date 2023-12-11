/*
Given the head of a linked list and an integer val,
remove all the nodes of the linked list that has Node.val == val,
and return the new head.

Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:
Input: head = [], val = 1
Output: []

Example 3:
Input: head = [7,7,7,7], val = 7
Output: []

Constraints:
The number of nodes in the list is in the range [0, 104].
1 <= Node.val <= 50
0 <= val <= 50
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

 function linkedListToArray(head: ListNode) {
    let arrOfHead = []
    while (head != null) {
        arrOfHead.push(head.val)
        head = head.next
    }
    return arrOfHead
 }

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (head == null){
        return head
    }

    let arrOfHead = linkedListToArray(head)
    let indexOfVal = arrOfHead.indexOf(val)

    while (indexOfVal != -1){
        arrOfHead.splice(indexOfVal, 1)
        indexOfVal = arrOfHead.indexOf(val)
    }

    if (arrOfHead.length == 0) {
        return null;
    }

    let newHead = new ListNode(arrOfHead[0]);
    let current = newHead

    for (let index = 1; index < arrOfHead.length; index++) {
        current.next = new ListNode(arrOfHead[index])
        current = current.next
    }

    return newHead

};
