// 72. Edit Distance

// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character

// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation:
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

// Constraints:

// 0 <= word1.length, word2.length <= 500
// word1 and word2 consist of lowercase English letters.

// Code
var minDistance = function (word1, word2) {
	let n = word1.length;
	let m = word2.length;

	if (!word1) return m;
	if (!word2) return n;

	const dp = new Map();

	function recur(i, j) {
		const key = `${i}|${j}`;
		if (dp.has(key)) return dp.get(key);

		if (i < 0) return j + 1;
		if (j < 0) return i + 1;

		if (word1[i] === word2[j]) return recur(i - 1, j - 1);
		const value = Math.min(recur(i, j - 1), recur(i - 1, j), recur(i - 1, j - 1)) + 1;
		dp.set(key, value);
		return value;
	}

	let ans = recur(n, m);
	return ans;
};
