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

function LinkedListToArray(head: ListNode): number[]{
    let arrayLinked = []
    while (head != null){
        arrayLinked.push(head.val);
        head = head.next;
    }
    return arrayLinked;
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let arrayL1 = LinkedListToArray(list1);
    let arrayL2 = LinkedListToArray(list2);
    arrayL1.push(...arrayL2);
    arrayL1.sort((n1,n2) => n1 - n2);
    console.log(arrayL1);

    if (arrayL1.length == 0){
        return null;
    }

    let head = new ListNode(arrayL1[0]);
    let current = head;

    for (let i = 1; i < arrayL1.length; i++) {
        current.next = new ListNode(arrayL1[i]);
        current = current.next;
    }

    return head;
};
