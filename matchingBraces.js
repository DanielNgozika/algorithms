function braces(values) {
	let returnArr = [];
	for (let i = 0; i < values.length; i++) {
		if (values[i].length % 2 !== 0) {
			returnArr.push("NO");
			continue;
		}
		for (let j = 0; j < values[i].length; j++) {
			if (
				values[i][j] === "(" &&
				values.filter((c) => c === values[i][j]).length % 2 !== 0
			) {
				returnArr.push("NO");
				break;
			} else {
			}
		}
	}

	return returnArr;
}

console.log(braces(["[{}]", "[}}{"]));
