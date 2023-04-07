// 1020. Number of Enclaves

// You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

// A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.

// Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.

// Example 1:

// Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
// Output: 3
// Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.
// Example 2:

// Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
// Output: 0
// Explanation: All 1s are either on the boundary or can reach the boundary.

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 500
// grid[i][j] is either 0 or 1.

// Code
var numEnclaves = function (grid) {
	const m = grid.length;
	const n = grid[0].length;
	let count = 0;

	function fill(i, j) {
		if (i < 0 || i == m || j < 0 || j == n) return;

		if (grid[i][j] == 0) return;

		grid[i][j] = 0;
		fill(i + 1, j);
		fill(i - 1, j);
		fill(i, j + 1);
		fill(i, j - 1);
	}

	for (let j = 0; j < n; j++) {
		fill(0, j);
		fill(m - 1, j);
	}

	for (let i = 0; i < m; i++) {
		fill(i, 0);
		fill(i, n - 1);
	}

	for (let a of grid) for (let cell of a) if (cell == 1) count += 1;

	return count;
};
