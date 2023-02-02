// 953. Verifying an Alien Dictionary https://leetcode.com/problems/verifying-an-alien-dictionary/

// In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

// Example 1:

// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
// Example 2:

// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
// Example 3:

// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

// Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// order.length == 26
// All characters in words[i] and order are English lowercase letters.

//Solution
var isAlienSorted = function (words, order) {
	const map = new Map();
	let s = "a";
	for (let c of order) {
		map.set(c, String.fromCharCode(s.charCodeAt(0)));
		s = String.fromCharCode(s.charCodeAt(0) + 1);
	}
	const mappedWords = [];
	for (let word of words) {
		let mappedWord = "";
		for (let w of word) mappedWord += map.get(w);
		mappedWords.push(mappedWord);
	}
	const mappedSortedWords = [...mappedWords].sort();
	return mappedWords.toString() === mappedSortedWords.toString();
};
