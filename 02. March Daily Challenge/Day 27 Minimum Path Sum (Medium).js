// 64. Minimum Path Sum

// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example 1:

// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
// Example 2:

// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12

// Code
var minPathSum = function (grid) {
	let m = grid.length;
	let n = grid[0].length;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i == 0 && j == 0) continue;
			else if (i == 0) grid[i][j] += grid[i][j - 1];
			else if (j == 0) grid[i][j] += grid[i - 1][j];
			else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
		}
	}

	return grid[m - 1][n - 1];
};
