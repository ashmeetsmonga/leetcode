// 1071. Greatest Common Divisor of Strings https://leetcode.com/problems/greatest-common-divisor-of-strings/description/
// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1.
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Example 2.
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

// Example 3.
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

// Solution
var gcdOfStrings = function (str1, str2) {
	if (str1.length < str2.length) return gcdOfStrings(str2, str1);

	const lengthGcd = gcd(str1.length, str2.length);
	const str = str1 + str2;
	const ans = str2.substring(0, lengthGcd);

	for (let i = 0; i < str.length; i += lengthGcd) {
		if (!str.startsWith(ans, i)) return "";
	}

	return ans;
};

function gcd(a, b) {
	return a === 0 ? b : gcd(b % a, a);
}
