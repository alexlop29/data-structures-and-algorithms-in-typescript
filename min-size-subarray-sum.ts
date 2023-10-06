/*

Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

*/

function minSubArrayLen(target: number, nums: number[]): number {
    if ( nums.indexOf(target) != -1 ){
        return 1;
    }

    let slidingWindow = 2;
    let lengthOfNums = nums.length;
    let currentIndex = 0;

    while ( slidingWindow < lengthOfNums ) {
        let slicedArray = nums.slice(currentIndex, currentIndex+slidingWindow)
        let slicedSum = slicedArray.reduce((sum, value) => sum + value, 0);
        if (slicedSum == target) {
            return slidingWindow;
        }

        if (currentIndex >= lengthOfNums) {
            slidingWindow += 1;
            currentIndex = 0;
            continue;
        }

        currentIndex += 1;
    }

    return 0;
};
