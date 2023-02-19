// 103. Binary Tree Zigzag Level Order Traversal

// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100

// Code
var zigzagLevelOrder = function (root) {
	if (!root) return [];
	let ans = [];

	let q = [[root, 0]];

	while (q.length) {
		let nodeVals = [];
		for (let [node, lvl] of q) {
			if (lvl % 2) nodeVals.unshift(node.val);
			else nodeVals.push(node.val);
		}
		ans.push(nodeVals);

		let curLevel = [];
		for (let [node, lvl] of q) {
			if (node.left) curLevel.push([node.left, lvl + 1]);
			if (node.right) curLevel.push([node.right, lvl + 1]);
		}

		q = curLevel;
	}

	return ans;
};
