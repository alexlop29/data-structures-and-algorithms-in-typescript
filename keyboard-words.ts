/*
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
In the American keyboard:
the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

Example 1:
Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]

Example 2:
Input: words = ["omk"]
Output: []

Example 3:
Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
 
Constraints:
1 <= words.length <= 20
1 <= words[i].length <= 100
words[i] consists of English letters (both lowercase and uppercase). 
*/

function findWords(words: string[]): string[] {
    let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

    let results = [];

    words.forEach((word) => {
        let letters = word.toLowerCase().split("");
        let firstLetter = letters[0];
        let match = "";
      
        rows.forEach((row) => {
            if (row.includes(firstLetter)) { match = row };
        });
      
        let containsAll = true;
        letters.forEach((letter) => {
            if(!match.includes(letter)){ containsAll = false };
        })

        if (containsAll == true) { results.push(word) };
    });

    return results;
};
