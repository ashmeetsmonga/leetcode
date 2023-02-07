// 904. Fruit Into Baskets https://leetcode.com/problems/fruit-into-baskets/

// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

// Example 1:
// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.

// Example 2:
// Input: fruits = [0,1,2,2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].

// Example 3:
// Input: fruits = [1,2,3,2,2]
// Output: 4
// Explanation: We can pick from trees [2,3,2,2].
// If we had started at the first tree, we would only pick from trees [1,2].

// Constraints:

// 1 <= fruits.length <= 105
// 0 <= fruits[i] < fruits.length

// Code

var totalFruit = function (fruits) {
	const map = new Map();
	let ans = 0;
	let start = 0;
	let end = 0;
	let differentFruitsCount = 0;

	while (end < fruits.length) {
		let currentFruit = fruits[end];
		if (!map.has(currentFruit) || map.get(currentFruit) === 0) {
			map.set(currentFruit, 0);
			differentFruitsCount += 1;
		}

		map.set(currentFruit, map.get(currentFruit) + 1);

		while (differentFruitsCount > 2) {
			const prevFruit = fruits[start];
			map.set(prevFruit, map.get(prevFruit) - 1);
			if (map.get(prevFruit) === 0) differentFruitsCount -= 1;
			start += 1;
		}

		ans = Math.max(ans, end - start + 1);
		end += 1;
	}

	return ans;
};
