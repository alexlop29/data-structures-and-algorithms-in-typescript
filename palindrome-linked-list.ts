/*
Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
 
Constraints:
The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
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

function isPalindrome(head: ListNode | null): boolean {
    let arrayOfLinkedList = linkedListToArray(head);
    let endingIndex = arrayOfLinkedList.length-1;
    let startingIndex = 0;

    while (startingIndex <= endingIndex){
        let n1 = arrayOfLinkedList[startingIndex];
        let n2 = arrayOfLinkedList[endingIndex];

        if (n1 != n2){
            return false;
        }

        startingIndex += 1;
        endingIndex -=1;
    }

    return true;
};
