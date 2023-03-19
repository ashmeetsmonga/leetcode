// 211. Design Add and Search Words Data Structure

// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

// Example:

// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True

// Constraints:

// 1 <= word.length <= 25
// word in addWord consists of lowercase English letters.
// word in search consist of '.' or lowercase English letters.
// There will be at most 3 dots in word for search queries.
// At most 104 calls will be made to addWord and search.
// Code
class WordDictionary {
	constructor() {
		this.dictionary = new Set();
	}

	addWord(word) {
		this.dictionary.add(word);
	}

	search(word) {
		if (word.indexOf(".") === -1) {
			if (this.dictionary.has(word)) {
				return true;
			} else {
				return false;
			}
		}

		checkWords: for (const currWord of this.dictionary) {
			if (word.length !== currWord.length) continue;

			for (let i = 0; word.length > i; i++) {
				if (word[i] !== currWord[i] && word[i] !== ".") continue checkWords;
			}

			return true;
		}
		return false;
	}
}
