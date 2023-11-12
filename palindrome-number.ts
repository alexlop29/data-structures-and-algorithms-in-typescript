/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 
Constraints:
-231 <= x <= 231 - 1
*/

/*
Solution: Convert the number to an array. Create second array of the number and reverse it. Then, compare the two arrays.
Runtime: 163 ms
Memory: 51.9 MB
*/
function isPalindrome(x: number): boolean {
    let numToArray, reversedArray;
    numToArray = Array.from(String(x), String);
    reversedArray = Array.from(String(x), String);
    reversedArray.reverse()

    if (JSON.stringify(numToArray) === JSON.stringify(reversedArray)){
        return true
    }

    return false;
};

/*
Solution: Convert the number to an array and implement a two-pointer loop to compare the starting and ending values. 
Runtime: 181 ms
Memory: 52.2 MB
*/
function isPalindrome(x: number): boolean {
    let arrayOfNum = Array.from(String(x), String);
    let firstPointer = 0;
    let secondPointer = arrayOfNum.length-1;

    while (firstPointer <  secondPointer){
        if (arrayOfNum[firstPointer] != arrayOfNum[secondPointer]){
            return false
        }
        firstPointer += 1;
        secondPointer -= 1;
    }

    return true
};

/*
Solution By Another User
https://leetcode.com/problems/palindrome-number/solutions/3494578/simple-ts-js-beats-91-65/?envType=study-plan-v2&envId=top-interview-150
*/
function isPalindrome(x: number): boolean {
    const reversed = `${x}`.split('').reverse().join('')

    return `${x}` === reversed
};
