/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false
 
Constraints:
0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
*/

function isSubsequence(s: string, t: string): boolean {
    let arrayOfS = s.split("");
    let arrayOfT = t.split("");
    let lengthOfS = arrayOfS.length-1;
    let index = 0;
    let foundedIndex = [];

    while (index <= lengthOfS){
        let currVal = arrayOfS[index];
        let indexOfVal = arrayOfT.indexOf(currVal);
        if (indexOfVal == -1){
            return false;
        }
        else {
            arrayOfT.splice(indexOfVal, 1);
            foundedIndex.push(indexOfVal);
        }
        index++;
    }

    let lengthOfFoundedIndex = foundedIndex.length-1;
    let newIndex = 1;
    
    while (newIndex <= lengthOfFoundedIndex){
        if (foundedIndex[newIndex] < foundedIndex[newIndex-1]){
            return false;
        }
        newIndex++;
    }
    
    return true;
};
