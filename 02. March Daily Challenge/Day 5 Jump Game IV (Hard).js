// 1345. Jump Game IV

// Given an array of integers arr, you are initially positioned at the first index of the array.

// In one step you can jump from index i to index:

// i + 1 where: i + 1 < arr.length.
// i - 1 where: i - 1 >= 0.
// j where: arr[i] == arr[j] and i != j.

// Return the minimum number of steps to reach the last index of the array.

// Notice that you can not jump outside of the array at any time.

// Example 1:

// Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
// Output: 3
// Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.

// Example 2:

// Input: arr = [7]
// Output: 0
// Explanation: Start index is the last index. You do not need to jump.

// Example 3:

// Input: arr = [7,6,9,6,9,6,9,7]
// Output: 1
// Explanation: You can jump directly from index 0 to index 7 which is last index of the array.

// Constraints:

// 1 <= arr.length <= 5 * 104
// -108 <= arr[i] <= 108

// Code
var minJumps = function (arr) {
	if (arr.length === 1) return 0;
	let map = new Map();

	for (let i in arr) {
		if (!map.has(arr[i])) map.set(arr[i], []);
		map.get(arr[i]).push(parseInt(i));
	}

	let n = arr.length;

	let q = [[0, 0]];
	let visited = new Set();
	visited.add(0);

	while (q.length) {
		let nxtLevel = [];
		for (let [idx, lvl] of q) {
			let prevIdx = idx - 1;
			if (prevIdx >= 0 && !visited.has(prevIdx)) {
				visited.add(prevIdx);
				nxtLevel.push([prevIdx, lvl + 1]);
			}

			let nxtIdx = idx + 1;
			if (nxtIdx < arr.length && !visited.has(nxtIdx)) {
				if (nxtIdx === n - 1) return lvl + 1;
				visited.add(nxtIdx);
				nxtLevel.push([nxtIdx, lvl + 1]);
			}

			const nxtArr = map.get(arr[idx]) || [];
			for (let nxtIdx of nxtArr) {
				if (nxtIdx === n - 1) return lvl + 1;
				if (!visited.has(nxtIdx)) {
					visited.add(nxtIdx);
					nxtLevel.push([nxtIdx, lvl + 1]);
				}
			}
			map.delete(arr[idx]);
		}
		q = nxtLevel;
	}
};
