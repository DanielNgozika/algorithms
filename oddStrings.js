function solve(m, s) {
	// fill this function
	let letters = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z"
	];
	let numbers = [
		97,
		98,
		99,
		100,
		101,
		102,
		103,
		104,
		105,
		106,
		107,
		108,
		109,
		110,
		111,
		112,
		113,
		114,
		115,
		116,
		117,
		118,
		119,
		120,
		121,
		122
	];

	let values = [];

	for (let i = 0; i < s.length; i++) {
		let powers = [];
		for (let j = 0; j < s[i].length; j++) {
			let index = letters.findIndex((l) => l === s[i][j]);
			powers.push(Math.pow(numbers[index], m));
		}

		values.push(powers.reduce((a, b) => a * b, 0));
	}

	let sum = values.reduce((a, b) => a + b, 0);

	if (sum % 2 === 0) return "EVEN";
	else return "ODD";
}

console.log(solve(50, ["aceace", "ceceaa", "abdbdbdbakjkljhkjh"]));
console.log(solve(47, ["azbde", "abcher", "acegk"]));
