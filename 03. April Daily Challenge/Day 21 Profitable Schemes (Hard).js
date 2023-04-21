// 879. Profitable Schemes

// There is a group of n members, and a list of various crimes they could commit. The ith crime generates a profit[i] and requires group[i] members to participate in it. If a member participates in one crime, that member can't participate in another crime.

// Let's call a profitable scheme any subset of these crimes that generates at least minProfit profit, and the total number of members participating in that subset of crimes is at most n.

// Return the number of schemes that can be chosen. Since the answer may be very large, return it modulo 109 + 7.

// Example 1:

// Input: n = 5, minProfit = 3, group = [2,2], profit = [2,3]
// Output: 2
// Explanation: To make a profit of at least 3, the group could either commit crimes 0 and 1, or just crime 1.
// In total, there are 2 schemes.
// Example 2:

// Input: n = 10, minProfit = 5, group = [2,3,5], profit = [6,7,8]
// Output: 7
// Explanation: To make a profit of at least 5, the group could commit any crimes, as long as they commit one.
// There are 7 possible schemes: (0), (1), (2), (0,1), (0,2), (1,2), and (0,1,2).

// Code
var profitableSchemes = function (n, minProfit, group, profit) {
	const m = profit.length;
	const MOD = Math.pow(10, 9) + 7;
	const memo = [...new Array(m)].map(() =>
		[...new Array(minProfit + 1)].map(() => new Array(n + 1).fill(-1))
	);

	function traversal(currentCrime, totalProfit, remainPeople) {
		if (currentCrime === profit.length) return totalProfit >= minProfit;

		if (memo[currentCrime][totalProfit][remainPeople] !== -1)
			return memo[currentCrime][totalProfit][remainPeople];

		const currentCrimeNotPicked = traversal(currentCrime + 1, totalProfit, remainPeople);

		let currentCrimePicked = 0;
		if (group[currentCrime] <= remainPeople)
			currentCrimePicked = traversal(
				currentCrime + 1,
				Math.min(minProfit, totalProfit + profit[currentCrime]),
				remainPeople - group[currentCrime]
			);

		memo[currentCrime][totalProfit][remainPeople] =
			(currentCrimePicked + currentCrimeNotPicked) % MOD;

		return memo[currentCrime][totalProfit][remainPeople];
	}

	return traversal(0, 0, n);
};
