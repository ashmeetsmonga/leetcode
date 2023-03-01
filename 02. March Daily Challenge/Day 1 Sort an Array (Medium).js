// 912. Sort an Array

// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

// Constraints:

// 1 <= nums.length <= 5 * 104
// -5 * 104 <= nums[i] <= 5 * 104

// Code
var sortArray = function (nums) {
	function mergeSort(l, r) {
		if (l >= r) return;
		let mid = Math.floor((l + r) / 2);
		mergeSort(l, mid);
		mergeSort(mid + 1, r);
		merge(l, mid, r);
	}

	function merge(l, mid, r) {
		let i = l,
			j = mid + 1;
		let sortedArray = [];

		while (i <= mid && j <= r) {
			if (nums[i] <= nums[j]) sortedArray.push(nums[i++]);
			else sortedArray.push(nums[j++]);
		}

		while (i <= mid) sortedArray.push(nums[i++]);
		while (j <= r) sortedArray.push(nums[j++]);

		sortedArray.forEach((val) => (nums[l++] = val));
	}
	mergeSort(0, nums.length - 1);
	return nums;
};
