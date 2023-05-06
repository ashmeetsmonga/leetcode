// 1498. Number of Subsequences That Satisfy the Given Sum Condition

// You are given an array of integers nums and an integer target.

// Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target. Since the answer may be too large, return it modulo 109 + 7.

// Example 1:

// Input: nums = [3,5,6,7], target = 9
// Output: 4
// Explanation: There are 4 subsequences that satisfy the condition.
// [3] -> Min value + max value <= target (3 + 3 <= 9)
// [3,5] -> (3 + 5 <= 9)
// [3,5,6] -> (3 + 6 <= 9)
// [3,6] -> (3 + 6 <= 9)
// Example 2:

// Input: nums = [3,3,6,8], target = 10
// Output: 6
// Explanation: There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).
// [3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]
// Example 3:

// Input: nums = [2,3,3,4,6,7], target = 12
// Output: 61
// Explanation: There are 63 non-empty subsequences, two of them do not satisfy the condition ([6,7], [7]).
// Number of valid subsequences (63 - 2 = 61).

// Constraints:

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 106
// 1 <= target <= 106

// Code
var numSubseq = function (nums, target) {
	nums.sort((a, b) => a - b);
	let i = 0,
		j = nums.length - 1;
	let result = 0;
	const MOD = Math.pow(10, 9) + 7;

	const pows = [1];

	for (let i = 1; i < nums.length; i++) {
		const val = (pows[i - 1] * 2) % MOD;
		pows.push(val);
	}

	while (i <= j) {
		if (nums[i] + nums[j] > target) {
			j -= 1;
		} else {
			result = (result + pows[j - i]) % MOD;
			i += 1;
		}
	}
	return result % MOD;
};
