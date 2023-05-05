// 1456. Maximum Number of Vowels in a Substring of Given Length

// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.
// 1 <= k <= s.length

// Code
var maxVowels = function (s, k) {
	let count = 0;
	let ans = 0;
	let map = new Map();
	map.set("a", true);
	map.set("e", true);
	map.set("i", true);
	map.set("o", true);
	map.set("u", true);

	let end = 0;

	while (end < k) {
		if (map.has(s[end])) count += 1;
		end += 1;
	}
	ans = count;
	let start = 0;

	while (end < s.length) {
		if (map.has(s[end])) count += 1;
		if (map.has(s[start])) count -= 1;
		ans = Math.max(ans, count);
		end += 1;
		start += 1;
	}

	return ans;
};
