/*
Given an integer n, return true if it is a power of four. Otherwise, return false.
An integer n is a power of four, if there exists an integer x such that n == 4x.

Example 1:
Input: n = 16
Output: true

Example 2:
Input: n = 5
Output: false

Example 3:
Input: n = 1
Output: true

Constraints:
-231 <= n <= 231 - 1
Follow up: Could you solve it without loops/recursion?
*/
function isPowerOfFour(n: number): boolean {
    let index = 0;

    while (index <= n){
        if (4 ** index == n){
            return true;
        } else if ( 4 ** index > n ){
            return false;
        }
        index++
    }

    return false;
};
