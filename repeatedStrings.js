function repeatedString(s, n) {
	let vowelsInString = 0;
	let remainderVowels = 0;

	if (s.length === 1 && s.includes("a")) {
		vowelsInString = n;
		return vowelsInString;
	}
	if (!s.includes("a")) return vowelsInString;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === "a") vowelsInString += 1;
	}

	let wholeNum = Math.floor(n / s.length);

	for (let i = 0; i < n % s.length; i++) {
		if (s[i] === "a") remainderVowels += 1;
	}

	return vowelsInString * wholeNum + remainderVowels;
}

console.log("1st:", repeatedString("a", 1000000000000));
console.log("2nd:", repeatedString("aba", 10));
