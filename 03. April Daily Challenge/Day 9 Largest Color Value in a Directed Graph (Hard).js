// 1857. Largest Color Value in a Directed Graph

// There is a directed graph of n colored nodes and m edges. The nodes are numbered from 0 to n - 1.

// You are given a string colors where colors[i] is a lowercase English letter representing the color of the ith node in this graph (0-indexed). You are also given a 2D array edges where edges[j] = [aj, bj] indicates that there is a directed edge from node aj to node bj.

// A valid path in the graph is a sequence of nodes x1 -> x2 -> x3 -> ... -> xk such that there is a directed edge from xi to xi+1 for every 1 <= i < k. The color value of the path is the number of nodes that are colored the most frequently occurring color along that path.

// Return the largest color value of any valid path in the given graph, or -1 if the graph contains a cycle.

// Example 1:

// Input: colors = "abaca", edges = [[0,1],[0,2],[2,3],[3,4]]
// Output: 3
// Explanation: The path 0 -> 2 -> 3 -> 4 contains 3 nodes that are colored "a" (red in the above image).
// Example 2:

// Input: colors = "a", edges = [[0,0]]
// Output: -1
// Explanation: There is a cycle from 0 to 0.

// Constraints:

// n == colors.length
// m == edges.length
// 1 <= n <= 105
// 0 <= m <= 105
// colors consists of lowercase English letters.
// 0 <= aj, bj < n

// Code
var largestPathValue = function (colors, edges) {
	const n = colors.length;
	const graph = new Array(n).fill().map((val) => []);
	const indeg = new Array(n).fill(0);
	let q = [];
	const topSortOrder = [];
	let count = 0;

	for (let [u, v] of edges) {
		graph[u].push(v);
		indeg[v] += 1;
	}

	for (let node = 0; node < n; node++) if (indeg[node] === 0) q.push(node);

	while (q.length) {
		const nextLevel = [];
		for (let node of q) {
			topSortOrder.push(node);
			for (let neighbor of graph[node]) {
				indeg[neighbor] -= 1;
				if (indeg[neighbor] === 0) nextLevel.push(neighbor);
			}
		}
		q = nextLevel;
	}

	if (topSortOrder.length !== n) return -1;

	for (let i = 97; i <= 122; i++) {
		const c = String.fromCharCode(i);
		const dp = new Array(n).fill(0);

		for (let i = 0; i < n; i++) {
			const node = topSortOrder[i];
			if (colors[node] === c) dp[node] += 1;
			count = Math.max(count, dp[node]);
			for (let neighbor of graph[node]) dp[neighbor] = Math.max(dp[neighbor], dp[node]);
		}
	}

	return count;
};
