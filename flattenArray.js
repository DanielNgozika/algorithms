function flatten(arr) {
	if (arr instanceof Array) {
		return arr.length === 0
			? []
			: flatten(arr[0]).concat(flatten(arr.slice(1)));
	}

	return [arr];
}

console.log(flatten([1, 2, [3, 4, [5, 6], 7, [8, 9]]]));
