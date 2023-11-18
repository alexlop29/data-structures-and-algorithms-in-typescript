/*
A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. 
There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:
Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 
Example 1:
Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]
Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
 
Constraints:
1 <= word.length, prefix.length <= 2000
word and prefix consist only of lowercase English letters.
At most 3 * 104 calls in total will be made to insert, search, and startsWith.
*/

class Trie {
    trie: string[]

    constructor() {
        this.trie = [];
    }

    insert(word: string): void {
        this.trie.push(word);
    }

    search(word: string): boolean {
        let lengthOfTrie = this.trie.length - 1;
        let index = 0;

        while (index <= lengthOfTrie) {
            let trieWord = this.trie[index]
            let locatedString = trieWord.indexOf(word);
            if (locatedString !== -1) {
                return true;
            }
            index++;
        }

        return false;
    }

    startsWith(prefix: string): boolean {
        let lengthOfTrie = this.trie.length - 1;
        let index = 0;

        while (index <= lengthOfTrie) {
            if (this.trie[index].startsWith(prefix)) {
                return true;
            }
            index++;
        }

        return false;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

/*
Resources:
- https://medium.com/basecs/trying-to-understand-tries-3ec6bede0014
- https://brilliant.org/wiki/tries/
- https://sentry.io/answers/string-contains-substring-javascript/#:~:text=The%20includes()%20method,found%2C%20or%20false%20if%20not.
*/
