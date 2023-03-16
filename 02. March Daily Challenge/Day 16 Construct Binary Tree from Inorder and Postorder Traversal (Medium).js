// 106. Construct Binary Tree from Inorder and Postorder Traversal

// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

// Example 1:

// Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// Output: [3,9,20,null,null,15,7]

// Example 2:

// Input: inorder = [-1], postorder = [-1]
// Output: [-1]

// Code
var buildTree = function (inorder, postorder) {
	let map = new Map();

	for (let i in inorder) map.set(inorder[i], parseInt(i));

	function recur(left, right) {
		if (left > right) return null;

		const val = postorder.pop();
		const root = new TreeNode(val);
		const mid = map.get(val);
		root.right = recur(mid + 1, right);
		root.left = recur(left, mid - 1);
		return root;
	}

	return recur(0, inorder.length - 1);
};
