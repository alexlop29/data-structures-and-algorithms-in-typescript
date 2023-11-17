/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
 
Constraints:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
*/

function majorityElement(nums: number[]): number {
    let hashOfElements = {};
    let sum = [0,0];

    nums.forEach((item) => {
        if (hashOfElements.hasOwnProperty(item)){
            let currVal = hashOfElements[item];
            hashOfElements[item] = currVal + 1;
        } else {
            hashOfElements[item] = 1;
        }
    });

    Object.keys(hashOfElements).forEach((key) => { 
        var value = hashOfElements[key]
        if (value > sum[1]){
            sum = [key, value]
        }
    })

    return sum[0];
};
