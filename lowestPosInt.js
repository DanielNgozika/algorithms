function solution(A) {
	A.sort((a, b) => a - b);
	let rtrnVal = 1;
	for (let i = 0; i < A.length; i++) {
		if (A[i] < rtrnVal) {
			continue;
		} else if (A[i] === rtrnVal) {
			rtrnVal++;
		} else break;
	}

	return rtrnVal;
}

console.log("Ist:", solution([1, 3, 6, 4, 1, 2]));
console.log("2nd:", solution([1, 2, 3]));
console.log("3rd:", solution([2]));
