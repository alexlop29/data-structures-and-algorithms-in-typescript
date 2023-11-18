/*
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"
 
Constraints:
1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

function reverseVowels(s: string): string {
    let arrOfIndexes = [];
    let arrOfS = s.split("");

    arrOfS.forEach((char, index)=> {
        if ("aeiouAEIOU".includes(char)){
            arrOfIndexes.push(index);
        }
    })

    let pointer1 = 0;
    let pointer2 = arrOfIndexes.length-1;

    while (pointer1 <= pointer2){
        let index1 = arrOfIndexes[pointer1];
        let index2 = arrOfIndexes[pointer2];
        let char1 = arrOfS[index1];
        let char2 = arrOfS[index2];
        arrOfS[index2] = char1;
        arrOfS[index1] = char2;
        pointer1++;
        pointer2--;
    }

    return arrOfS.join("");
};
