/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

function lengthOfLongestSubstring(s: string): number {
    let index = 0;
    let chars = s.split('');
    let length = chars.length - 1;

    if (length == 0){
        return 1;
    }

    let longestSubString = 0;

    let currChars = [chars[index]];
    let secondPointer = index+1;

    while (index < length){
        console.log(chars[index], chars[secondPointer], currChars);

        if (currChars.indexOf(chars[secondPointer]) != -1){
            if (currChars.length > longestSubString) { longestSubString = currChars.length}
            index++;
            currChars = [chars[index]];
            secondPointer = index+1;
        } else {
            currChars.push(chars[secondPointer]);
            secondPointer++;
        }

        if (secondPointer == length){
            index++;
            currChars = [chars[index]];
            secondPointer = index+1;
        }
    };

    return longestSubString;
};
