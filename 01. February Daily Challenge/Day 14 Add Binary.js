// 67. Add Binary  https://leetcode.com/problems/add-binary/

// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

// Code
var addBinary = function (a, b) {
	const aRev = a.split("").reverse();
	const bRev = b.split("").reverse();

	let ans = [];
	let carry = 0;

	const n = Math.max(aRev.length, bRev.length);
	for (let i = 0; i < n; i++) {
		const num1 = Number(aRev[i] || 0);
		const num2 = Number(bRev[i] || 0);
		carry = num1 + num2 + Number(ans[i] || 0);
		if (carry >= 2) {
			ans[i] = carry % 2;
			ans.push(1);
		} else ans[i] = carry;
	}

	return ans.reverse().join("");
};
