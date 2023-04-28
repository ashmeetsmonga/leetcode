// 839. Similar String Groups

// Two strings X and Y are similar if we can swap two letters (in different positions) of X, so that it equals Y. Also two strings X and Y are similar if they are equal.

// For example, "tars" and "rats" are similar (swapping at positions 0 and 2), and "rats" and "arts" are similar, but "star" is not similar to "tars", "rats", or "arts".

// Together, these form two connected groups by similarity: {"tars", "rats", "arts"} and {"star"}.  Notice that "tars" and "arts" are in the same group even though they are not similar.  Formally, each group is such that a word is in the group if and only if it is similar to at least one other word in the group.

// We are given a list strs of strings where every string in strs is an anagram of every other string in strs. How many groups are there?

// Example 1:

// Input: strs = ["tars","rats","arts","star"]
// Output: 2
// Example 2:

// Input: strs = ["omv","ovm"]
// Output: 1

// Constraints:

// 1 <= strs.length <= 300
// 1 <= strs[i].length <= 300
// strs[i] consists of lowercase letters only.
// All words in strs have the same length and are anagrams of each other.

// Code
var numSimilarGroups = function (strs) {
	const hammingDistance = (a, b) => {
		let count = 0;
		for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) count += 1;
		return count === 2 || count === 0;
	};

	const dfs = (node) => {
		visited.add(node);

		for (let neighbor of graph.get(node)) {
			if (!visited.has(neighbor)) dfs(neighbor);
		}
	};

	const graph = new Map();

	for (let word of strs) graph.set(word, []);

	for (let i = 0; i < strs.length; i++) {
		for (let j = i + 1; j < strs.length; j++) {
			if (hammingDistance(strs[i], strs[j])) {
				const newEdge = graph.get(strs[i]);
				newEdge.push(strs[j]);
				graph.set(strs[i], newEdge);

				const newEdge2 = graph.get(strs[j]);
				newEdge2.push(strs[i]);
				graph.set(strs[j], newEdge2);
			}
		}
	}

	let count = 0;
	let visited = new Set();

	for (let word of strs) {
		if (!visited.has(word)) {
			count += 1;
			dfs(word);
		}
	}

	return count;
};
