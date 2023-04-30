// 1579. Remove Max Number of Edges to Keep Graph Fully Traversable
// Hard

// 1599

// 23

// Add to List

// Share
// Alice and Bob have an undirected graph of n nodes and three types of edges:

// Type 1: Can be traversed by Alice only.
// Type 2: Can be traversed by Bob only.
// Type 3: Can be traversed by both Alice and Bob.
// Given an array edges where edges[i] = [typei, ui, vi] represents a bidirectional edge of type typei between nodes ui and vi, find the maximum number of edges you can remove so that after removing the edges, the graph can still be fully traversed by both Alice and Bob. The graph is fully traversed by Alice and Bob if starting from any node, they can reach all other nodes.

// Return the maximum number of edges you can remove, or return -1 if Alice and Bob cannot fully traverse the graph.

// Example 1:

// Input: n = 4, edges = [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]]
// Output: 2
// Explanation: If we remove the 2 edges [1,1,2] and [1,1,3]. The graph will still be fully traversable by Alice and Bob. Removing any additional edge will not make it so. So the maximum number of edges we can remove is 2.
// Example 2:

// Input: n = 4, edges = [[3,1,2],[3,2,3],[1,1,4],[2,1,4]]
// Output: 0
// Explanation: Notice that removing any edge will not make the graph fully traversable by Alice and Bob.
// Example 3:

// Input: n = 4, edges = [[3,2,3],[1,1,2],[2,3,4]]
// Output: -1
// Explanation: In the current graph, Alice cannot reach node 4 from the other nodes. Likewise, Bob cannot reach 1. Therefore it's impossible to make the graph fully traversable.

// Constraints:

// 1 <= n <= 105
// 1 <= edges.length <= min(105, 3 * n * (n - 1) / 2)
// edges[i].length == 3
// 1 <= typei <= 3
// 1 <= ui < vi <= n
// All tuples (typei, ui, vi) are distinct.

// Code
var maxNumEdgesToRemove = function (n, edges) {
	function find(node) {
		if (par[node] !== node) {
			par[node] = find(par[node]);
		}
		return par[node];
	}

	function union(node1, node2) {
		const x = find(node1);
		const y = find(node2);
		if (x == y) return false;
		par[x] = y;
		return true;
	}

	let par = new Array(n + 1).fill().map((_, i) => i);
	let res = 0;
	let e1 = 0;
	let e2 = 0;

	for (let [type, n1, n2] of edges) {
		if (type === 3) {
			if (union(n1, n2)) {
				e1 += 1;
				e2 += 1;
			} else res += 1;
		}
	}
	const par2 = [...par];
	for (let [type, n1, n2] of edges) {
		if (type === 1) {
			if (union(n1, n2)) {
				e1 += 1;
			} else res += 1;
		}
	}
	par = par2;
	for (let [type, n1, n2] of edges) {
		if (type === 2) {
			if (union(n1, n2)) {
				e2 += 1;
			} else res += 1;
		}
	}
	if (e1 === n - 1 && e2 === n - 1) return res;
	else return -1;
};
