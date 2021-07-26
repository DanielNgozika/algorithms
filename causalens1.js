function sortByPriceAscending(jsonString) {
	// Your code goes here
	let parsed = JSON.parse(jsonString);
	let newArray = [];

	for (let i = 0; i < parsed.length; i++) {
		if (i === 0) {
			newArray.push(parsed[i]);
		} else if (i > 0 && parsed[i].price < parsed[i - 1].price) {
			newArray[0] = parsed[i];
		}
	}

	return JSON.stringify(newArray);
}

console.log(
	sortByPriceAscending(
		'[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'
	)
);
