// 438. Find All Anagrams in a String  https://leetcode.com/problems/find-all-anagrams-in-a-string/

// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

// Example 2:
// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

// Constraints:

// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.

// Code
var findAnagrams = function (s, p) {
	const m = s.length;
	const n = p.length;
	if (m < n) return [];
	const count = new Array(26).fill(0);
	const ans = [];

	for (let i = 0; i < p.length; i++) {
		count[p.charCodeAt(i) - "a".charCodeAt(0)]++;
		count[s.charCodeAt(i) - "a".charCodeAt(0)]--;
	}
	if (allZero(count)) ans.push(0);

	for (let i = n; i < m; i++) {
		count[s.charCodeAt(i) - "a".charCodeAt(0)]--;
		count[s.charCodeAt(i - n) - "a".charCodeAt(0)]++;
		if (allZero(count)) ans.push(i - n + 1);
	}

	return ans;
};

function allZero(arr) {
	for (let i of arr) if (i !== 0) return false;
	return true;
}
