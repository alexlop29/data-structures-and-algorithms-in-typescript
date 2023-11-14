/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
 
Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

function isAnagram(s: string, t: string): boolean {
    let isAnagram = true;

    const sToArray = s.split("");
    const tToArray = t.split("");

    if (sToArray.length != tToArray.length){
        return false;
    }

    sToArray.forEach((item, index) => {
        let locatedIndex = tToArray.indexOf(item);
        if (locatedIndex === -1){
            isAnagram = false;
        } else{
            tToArray.splice(locatedIndex, 1);
        }
        
    });

    return isAnagram;
};
