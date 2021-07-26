function solution(T, R) {
	// write your code in JavaScript (Node.js 8.9.4)
	let points = 0;
	let passed = [];
	let failed = [];

	function checkFailed() {
		for (let f = 0; f < failed.length; f++) {
			if (failed[f].includes(passed[j][passed[j].length - 2]))
				return true;
			else continue;
		}
	}

	for (let i = 0; i < T.length; i++) {
		if (R[i] === "OK") passed.push(T[i]);
		else failed.push(T[i]);
	}

	for (let j = 0; j < passed.length; j++) {
		if (parseInt(passed[j][passed[j].length - 1]) !== NaN) points++;
		else if (checkFailed()) continue;
	}

	return console.log(Math.floor((points * 100) / 3));
}

const T = ["test1a", "test2", "test1b", "test1c", "test3"];
const R = ["Wrong answer", "OK", "Runtime error", "OK", "time limit exceeded"];

solution(T, R);

// T[0] = "test1a" R[0] = "Wrong answer";
// T[1] = "test2" R[1] = "OK"
// T[2] = "test1b" R[2] = "Runtime error";
// T[3] = "test1c" R[3] = "OK"
// T[4] = "test3" R[4] = "time limit exceeded"

// answer = 33
