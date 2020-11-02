function findSubstring(s, k) {
	// Write your code here
	let vowels = ["a", "e", "i", "o", "u"];
	let subStr;
	let maxVowelCount = 0;

	for (let i = 0; i + k <= s.length; i++) {
		let str = "";
		let vowelCount = 0;

		for (let j = i; j < i + k; j++) {
			str = str + s[j];
			if (vowels.includes(s[j])) vowelCount = vowelCount + 1;
		}

		if (vowelCount > maxVowelCount) {
			maxVowelCount = vowelCount;
			subStr = str;
		}
	}

	return subStr;
}

console.log(findSubstring(["a", "z", "e", "r", "d", "i", "i"], 5));
