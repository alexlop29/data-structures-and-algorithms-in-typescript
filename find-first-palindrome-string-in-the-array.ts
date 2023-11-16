/*
Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.

Example 1:
Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.

Example 2:
Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".

Example 3:
Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned.

Constraints:
1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists only of lowercase English letters.
*/

function isPalindrome(s: string): boolean {
    let arrayOfS = s.split("");
    let endingIndex = arrayOfS.length-1;
    let startingIndex = 0;

    while (startingIndex <= endingIndex){
        let n1 = arrayOfS[startingIndex];
        let n2 = arrayOfS[endingIndex];
        if (n1 != n2){
            return false;
        }
        startingIndex += 1;
        endingIndex -=1;
    }

    return true;
}

function firstPalindrome(words: string[]): string {
    let length = words.length-1;
    let startingIndex = 0;
    let firstPalindrome = "";

    while (startingIndex <= length){
        let word = words[startingIndex];
        let checkIfPalindrome = isPalindrome(word);
        if (checkIfPalindrome){
            firstPalindrome = word;
            break;
        }
        startingIndex += 1;
    }


    return firstPalindrome;
};
