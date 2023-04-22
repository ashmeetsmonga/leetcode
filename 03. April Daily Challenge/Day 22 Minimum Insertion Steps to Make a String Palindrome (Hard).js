// 1312. Minimum Insertion Steps to Make a String Palindrome

// Given a string s. In one step you can insert any character at any index of the string.

// Return the minimum number of steps to make s palindrome.

// A Palindrome String is one that reads the same backward as well as forward.

// Example 1:

// Input: s = "zzazz"
// Output: 0
// Explanation: The string "zzazz" is already palindrome we do not need any insertions.
// Example 2:

// Input: s = "mbadm"
// Output: 2
// Explanation: String can be "mbdadbm" or "mdbabdm".
// Example 3:

// Input: s = "leetcode"
// Output: 5
// Explanation: Inserting 5 characters the string becomes "leetcodocteel".

// Code
var minInsertions = function (s) {
	const s1 = s;
	const s2 = s.split("").reverse().join("");
	const n = s.length;
	let dp = [...new Array(n + 1)].map((val) => new Array(n + 1).fill(0));

	//Calculating length of longest common palindromic subsequence
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			if (s1[i - 1] == s2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
			else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
		}
	}

	return n - dp[n][n];
};
