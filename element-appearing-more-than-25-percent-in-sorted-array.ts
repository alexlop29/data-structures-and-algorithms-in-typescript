/*
Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

Example 1:
Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6

Example 2:
Input: arr = [1,1]
Output: 1
 
Constraints:
1 <= arr.length <= 104
0 <= arr[i] <= 105
*/

function findSpecialInteger(arr: number[]): number {
    const length = arr.length;
    const percent = length * .25;
    let hashOfOccurences = {};
    let desiredNum = 0;

    arr.forEach((num) => {
        if (hashOfOccurences.hasOwnProperty(num)) {
            let currVal = hashOfOccurences[num];
            hashOfOccurences[num] = currVal + 1;
        } else {
            hashOfOccurences[num] = 1;
        }
    })


    Object.keys(hashOfOccurences).forEach((key) => { 
        let value = hashOfOccurences[key];
        if (value >= percent) {
            desiredNum = Number(key);
        }
    });

    return desiredNum;
};
