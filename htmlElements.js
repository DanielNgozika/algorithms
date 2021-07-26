function HTMLElements(str) {
	const openingTags = str
		.split("<")
		.filter((el) => el[0] !== "/")
		.map((f) => f[0])
		.filter((m, i) => i !== 0);
	const closingTags = str
		.split("/")
		.filter((el) => el[0] !== "<")
		.map((m) => m[0]);

	console.log("-----opening----", openingTags);
	console.log("-----closing----", closingTags);

	for (let i = 0; i < openingTags.length; i++) {
		if (openingTags[i] !== closingTags[closingTags.length - i - 1]) {
			return openingTags[i] === "d"
				? "div"
				: openingTags[i] === "e"
				? "em"
				: openingTags[i];
		} else continue;
	}

	return true;
}

console.log(HTMLElements("<p><em><i>test test test</b></em></p>"));
