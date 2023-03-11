// 109. Convert Sorted List to Binary Search Tree (Medium)

// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// Example 1:

// Input: head = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.

// Example 2:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in head is in the range [0, 2 * 104].
// -105 <= Node.val <= 105

// Code
var sortedListToBST = function (head) {
	function toArray(node) {
		const arr = [];
		while (node) {
			arr.push(node.val);
			node = node.next;
		}

		return arr;
	}

	function toHeightBalBST(left, right, arr) {
		if (right < left) return null;

		let mid = Math.floor((left + right) / 2);
		let root = new TreeNode(arr[mid]);

		root.left = toHeightBalBST(left, mid - 1, arr);
		root.right = toHeightBalBST(mid + 1, right, arr);

		return root;
	}

	const arr = toArray(head);
	const root = toHeightBalBST(0, arr.length - 1, arr);

	return root;
};
