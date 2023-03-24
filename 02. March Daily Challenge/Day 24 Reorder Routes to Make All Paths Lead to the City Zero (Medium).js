// 1466. Reorder Routes to Make All Paths Lead to the City Zero

// There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

// Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.

// This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

// Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.

// It's guaranteed that each city can reach city 0 after reorder.

// Example 1:

// Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
// Output: 3
// Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
// Example 2:

// Input: n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]
// Output: 2
// Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
// Example 3:

// Input: n = 3, connections = [[1,0],[2,0]]
// Output: 0

// Code
var minReorder = function (n, connections) {
	let graph = new Array(n).fill().map((val) => []);

	for (let [src, des] of connections) {
		graph[src].push([des, 1]);
		graph[des].push([src, 0]);
	}
	let visited = new Set();
	visited.add(0);
	let q = [0];
	let ans = 0;
	while (q.length) {
		const newLevel = [];
		for (let node of q) {
			for (let [neighbor, cost] of graph[node]) {
				if (!visited.has(neighbor)) {
					newLevel.push(neighbor);
					visited.add(neighbor);
					ans += cost;
				}
			}
		}

		q = newLevel;
	}
	return ans;
};
