// 101. Symmetric Tree

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:

// Input: root = [1,2,2,null,3,null,3]
// Output: false

// Code
var isSymmetric = function (root) {
	if (!root) return true;

	function traversal(tree1, tree2) {
		if (!tree1 && tree2) return false;
		if (tree1 && !tree2) return false;

		if (!tree1 && !tree2) return true;

		if (tree1.val !== tree2.val) return false;

		return traversal(tree1.left, tree2.right) && traversal(tree2.left, tree1.right);
	}

	return traversal(root.left, root.right);
};
