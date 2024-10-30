/*
Given an integer n, return all the numbers in the range [1, n] sorted in lexicographical order.
You must write an algorithm that runs in O(n) time and uses O(1) extra space. 

Example 1:
Input: n = 13
Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]

Example 2:
Input: n = 2
Output: [1,2]
 
Constraints:
1 <= n <= 5 * 104
*/

function lexicalOrder(n: number): number[] {
    let nums = Array.from(Array(n+1).keys());
    nums.splice(0, 1);
    let categorizedNums = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: []
    };

    let index = 0;
    let length = nums.length - 1;

    while (index <= length){
        let currentNum = nums[index];
        let splitCurrentNum = String(currentNum).split("");

        let value = categorizedNums[Number(splitCurrentNum[0])];
        value.push(currentNum);
        categorizedNums[Number(splitCurrentNum)] = value;

        index++;
    };

    let lexiNums = [];

    for (const [key, value] of Object.entries(categorizedNums)) {
        let sorted = value.sort((a, b) => a - b);
        console.log(`view sorted: ${sorted}`);
        lexiNums.push(...sorted);
        console.log(lexiNums);
    };

    let patched = Array.from(new Set(lexiNums))

    return patched;
};
