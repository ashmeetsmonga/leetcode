// 28. Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

// Code
var strStr = function (haystack, needle) {
	let needleHash = 0;
	let haystackHash = 0;

	let M = Number.MAX_SAFE_INTEGER;
	let base = 10;
	let n = needle.length,
		h = haystack.length;

	if (n > h) return -1;

	for (let i = 0; i < n; i++) {
		needleHash = (needleHash * base + needle.charCodeAt(i)) % M;
		haystackHash = (haystackHash * base + haystack.charCodeAt(i)) % M;
	}

	let maxBase = base ** (n - 1);
	console.log(maxBase);

	if (needleHash === haystackHash) return 0;

	for (let i = n; i < h; i++) {
		haystackHash = (haystackHash - maxBase * haystack.charCodeAt(i - n)) % M;
		haystackHash = (haystackHash * base + haystack.charCodeAt(i)) % M;
		if (haystackHash === needleHash && haystack.substring(i - n + 1, i + 1) === needle)
			return i - n + 1;
	}

	return -1;
};
