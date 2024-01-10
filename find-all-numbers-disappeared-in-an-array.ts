/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]

Constraints:
n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
*/

function findDisappearedNumbers(nums: number[]): number[] {
    let missingNums = [];
    let length = nums.length;
    let index = 1;

    while (index <= length){
        if (nums.indexOf(index) == -1){
            missingNums.push(index);
        }
        index++;
    }

    return missingNums;

};
