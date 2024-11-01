/*
Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

Example 1:
Input: root = [5,3,6,2,4,null,7], k = 9
Output: true

Example 2:
Input: root = [5,3,6,2,4,null,7], k = 28
Output: false

Constraints:
The number of nodes in the tree is in the range [1, 104].
-104 <= Node.val <= 104
root is guaranteed to be a valid binary search tree.
-105 <= k <= 105
*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findTarget(root: TreeNode | null, k: number): boolean {
    let nums = [];

    function traversal(node: TreeNode){
        if (node == null){
            return;
        };
        traversal(node.left);
        nums.push(node.val);
        traversal(node.right);
    };
  
    traversal(root);

    let pointer1 = 0;
    let pointer2 = 0;
    let length = nums.length-1;

    while (pointer1 < length){
        let num1 = nums[pointer1];
        let num2 = nums[pointer2];

        if (num1 + num2 == k){
            return true;
        };
        
        if (pointer2 <= length){
            pointer2++;
        } else {
            pointer1++;
            pointer2 = pointer1 + 1
        };
    };

    return false;
};
