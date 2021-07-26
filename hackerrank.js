function processData(input) {
	//Enter your code here
	const newArray = input.split("\n");
	newArray.shift();

	for (let i = 0; i < newArray.length; i++) {
		let even = [];
		let odd = [];

		for (let j = 0; j < newArray[i].length; j++) {
			if (j === 0 || j % 2 === 0) even.push(newArray[i][j]);
			else odd.push(newArray[i][j]);
		}

		console.log(`${even.join("")} ${odd.join("")}`);
	}
}

processData(
	"10\njkotzxzxrxtzytlruwrxytyzsuzytwyzxuzytryzuzysxvsmupouysywywqlhg\neklrywzvpxtvoptlrskmskszvwzsuzxrtvyzwruqvyxusqwupnurqmtltnltsmuyxqoksyurpwqpv\nefhpuvqvnuwpvwysvnunostvpqvxtxsvqwqvsxtxvqpvtsonunvsywvpwunvqvupxzy\notytmpszumnryqvxpvnvxyvpvprumnvsqwqwtsqyqksqvnuqpxszwzsxsx\nbhmptlqswsvoqsvzyzwoqtvowpyqxpwurpxutswtrpwzvrpkswzuo\nrvovprxzvwrxpwpzsltzutxztrxqxt\nceiosyrtztvnqsuozrxvtqywqwyrxtnjh\ndjnsyzxszryqworuxpqvqwquvotzsqvoupwvztzupowtqnvpxqyrwutzuys\nkovzuywsuvwxuxtwzryzuxyvouvyskoqtwryszxqqxzsyrwtqoksyvuovyxuzyrzwtxuxwvuswuqvryu\nptvzstvotxqyvzrwyqryzrpkswzryupwutmigc"
);
