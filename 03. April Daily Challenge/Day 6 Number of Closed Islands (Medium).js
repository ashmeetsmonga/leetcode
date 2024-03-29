// 1254. Number of Closed Islands

// Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

// Return the number of closed islands.

// Example 1:

// Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
// Output: 2
// Explanation:
// Islands in gray are closed because they are completely surrounded by water (group of 1s).
// Example 2:

// Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
// Output: 1
// Example 3:

// Input: grid = [[1,1,1,1,1,1,1],
//                [1,0,0,0,0,0,1],
//                [1,0,1,1,1,0,1],
//                [1,0,1,0,1,0,1],
//                [1,0,1,1,1,0,1],
//                [1,0,0,0,0,0,1],
//                [1,1,1,1,1,1,1]]
// Output: 2

// Constraints:

// 1 <= grid.length, grid[0].length <= 100
// 0 <= grid[i][j] <=1

// Code
var closedIsland = function (grid) {
	let m = grid.length;
	let n = grid[0].length;
	let count = 0;

	const visited = new Set();
	function dfs(i, j) {
		if (grid[i][j] == 1) return true;

		grid[i][j] = 1;

		return dfs(i + 1, j) && dfs(i - 1, j) && dfs(i, j + 1) && dfs(i, j - 1);
	}

	function fill(i, j) {
		if (i == m || i < 0 || j == n || j < 0) return;

		if (grid[i][j] == 1) return;

		grid[i][j] = 1;
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
		fill(i, n - 1);
		fill(i, 0);
	}

	for (i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] == 0 && dfs(i, j)) {
				count += 1;
			}
		}
	}

	return count;
};
