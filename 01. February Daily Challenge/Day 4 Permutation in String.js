// 567. Permutation in String  https://leetcode.com/problems/permutation-in-string/

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

//Code
var checkInclusion = function (s1, s2) {
	let l1 = s1.length;
	let l2 = s2.length;
	if (l2 < l1) return false;
	let count = new Array(26).fill(0);

	for (let i = 0; i < l1; i++) {
		count[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
		count[s2.charCodeAt(i) - "a".charCodeAt(0)]--;
	}
	if (allZero(count)) return true;

	for (let i = l1; i < l2; i++) {
		count[s2.charCodeAt(i) - "a".charCodeAt(0)]--;
		count[s2.charCodeAt(i - l1) - "a".charCodeAt(0)]++;
		if (allZero(count)) return true;
	}
	return false;
};

function allZero(arr) {
	for (let i of arr) if (i !== 0) return false;
	return true;
}
