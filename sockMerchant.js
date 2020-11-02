function sockMerchant(n, ar) {
	ar.sort((a, b) => a - b);
	let numOfPair = 0;

	for (let i = 0; i < ar.length; i++) {
		if (ar[i] === ar[i + 1]) {
			numOfPair++;
			i = i + 1;
		}
	}

	return numOfPair;
}

console.log("output", sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
