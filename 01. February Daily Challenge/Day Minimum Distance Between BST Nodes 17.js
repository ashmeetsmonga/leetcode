// 783. Minimum Distance Between BST Nodes

// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

// Example 1:
// Input: root = [4,2,6,1,3]
// Output: 1

// Example 2:
// Input: root = [1,0,48,null,null,12,49]
// Output: 1

// Constraints:
// The number of nodes in the tree is in the range [2, 100].
// 0 <= Node.val <= 105

// Code
var minDiffInBST = function (root) {
	let ans = Number.MAX_VALUE;
	let pre = -1;

	function inorder(node) {
		if (!node) return;
		inorder(node.left);

		if (pre > -1) ans = Math.min(ans, node.val - pre);
		pre = node.val;

		inorder(node.right);
	}

	inorder(root);
	return ans;
};
