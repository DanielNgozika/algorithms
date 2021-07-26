function solution(S, K) {
	// write your code in JavaScript (Node.js 8.9.4)
	let compressionLengths = [];
	let compressed = "";
	let count = 1;

	for (let i = 0; i < S.length; i++) {
		for (let j = 0; j < S.length; j++) {
			if (j >= i && j <= i + K) {
				continue;
			}
			if (S[j] === S[j + 1]) {
				count++;
			} else if (count === 1) {
				compressed += S[j];
			} else {
				compressed += count + S[j];
				count = 1;
			}
		}
		compressionLengths.push(compressed.length);
		compressed = "";
	}

	return Math.min(...compressionLengths);
}

console.log(solution("ABBBCCDDCCC", 3));
