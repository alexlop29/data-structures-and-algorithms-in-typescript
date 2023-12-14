/*
Given an array arr of integers, check if there exist two indices i and j such that:
i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 
Example 1:
Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

Example 2:
Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.
 
Constraints:
2 <= arr.length <= 500
-103 <= arr[i] <= 103
*/

function checkIfExist(arr: number[]): boolean {
    let index = 0;
    let length = (arr.length) - 1;

    while (index <= length){
        let num = arr[index];
        arr.splice(index, 1);
        let halfOfNum = num/2;
        let doubleOfNum = num * 2;
        let indexOfHalf = arr.indexOf(halfOfNum);
        let indexOfDouble = arr.indexOf(doubleOfNum);
        if (indexOfHalf != -1 || indexOfDouble != -1){
            return true;
        }
        arr.splice(index, 1, num);
        index++;
    }

    return false;
};
