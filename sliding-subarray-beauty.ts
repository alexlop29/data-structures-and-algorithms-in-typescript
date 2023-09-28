/*
Given an integer array nums containing n integers, find the beauty of each subarray of size k.

The beauty of a subarray is the xth smallest integer in the subarray if it is negative, or 0 if there are fewer than x negative integers.

Return an integer array containing n - k + 1 integers, which denote the beauty of the subarrays in order from the first index in the array.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,-1,-3,-2,3], k = 3, x = 2
Output: [-1,-2,-2]
Explanation: There are 3 subarrays with size k = 3. 
The first subarray is [1, -1, -3] and the 2nd smallest negative integer is -1. 
The second subarray is [-1, -3, -2] and the 2nd smallest negative integer is -2. 
The third subarray is [-3, -2, 3] and the 2nd smallest negative integer is -2.
*/

function getSubarrayBeauty(nums: number[], k: number, x: number): number[] {
    let beauty_arr = [];
    let len_of_nums = nums.length;
    let i = 0;

    while ( i < len_of_nums ) {
        let count_neg_nums = 0;
        let curr_arr = nums.slice(i, i+k);
        if (curr_arr.length < k ) { break }

        curr_arr.sort((a, b) => (a - b));

        let neg_arr = curr_arr.filter((curr_num) => curr_num < 0)
        if ( neg_arr.length < x ) { beauty_arr.push(0) }
        else { beauty_arr.push(curr_arr[x-1]) }

        i += 1;
    }

    return beauty_arr
};
