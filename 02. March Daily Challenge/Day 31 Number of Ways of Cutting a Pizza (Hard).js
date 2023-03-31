// 1444. Number of Ways of Cutting a Pizza

// Given a rectangular pizza represented as a rows x cols matrix containing the following characters: 'A' (an apple) and '.' (empty cell) and given the integer k. You have to cut the pizza into k pieces using k-1 cuts.

// For each cut you choose the direction: vertical or horizontal, then you choose a cut position at the cell boundary and cut the pizza into two pieces. If you cut the pizza vertically, give the left part of the pizza to a person. If you cut the pizza horizontally, give the upper part of the pizza to a person. Give the last piece of pizza to the last person.

// Return the number of ways of cutting the pizza such that each piece contains at least one apple. Since the answer can be a huge number, return this modulo 10^9 + 7.

// Example 1:

// Input: pizza = ["A..","AAA","..."], k = 3
// Output: 3
// Explanation: The figure above shows the three ways to cut the pizza. Note that pieces must contain at least one apple.
// Example 2:

// Input: pizza = ["A..","AA.","..."], k = 3
// Output: 1
// Example 3:

// Input: pizza = ["A..","A..","..."], k = 1
// Output: 1

// Code
var ways = function (pizza, k) {
	const M = Math.pow(10, 9) + 7;
	for (let i = 0; i < pizza.length; i++) pizza[i] = pizza[i].split("");

	const m = pizza.length;
	const n = pizza[0].length;

	const map = new Map();

	function isValid(startRow, endRow, startCol, endCol) {
		for (let i = startRow; i <= endRow; i++) {
			for (let j = startCol; j <= endCol; j++) if (pizza[i][j] === "A") return true;
		}

		return false;
	}

	function recur(startRow, startCol, cutsLeft) {
		if (cutsLeft == 0) {
			return 1;
		}

		const key = startRow + "|" + startCol + "|" + cutsLeft;
		if (map.has(key)) return map.get(key);

		let ans = 0;

		for (let row = startRow; row < m; row++) {
			const isUpperValid = isValid(startRow, row, startCol, n - 1);
			const isLowerValid = isValid(row + 1, m - 1, startCol, n - 1);

			if (isUpperValid && isLowerValid) {
				ans = (ans + recur(row + 1, startCol, cutsLeft - 1)) % M;
			}
		}

		for (let col = startCol; col < n; col++) {
			const isLeftValid = isValid(startRow, m - 1, startCol, col);
			const isRightValid = isValid(startRow, m - 1, col + 1, n - 1);

			if (isLeftValid && isRightValid) {
				ans = (ans + recur(startRow, col + 1, cutsLeft - 1)) % M;
			}
		}
		map.set(key, ans);
		return ans;
	}

	let count = recur(0, 0, k - 1);
	return count;
};
