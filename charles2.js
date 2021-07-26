function formStrings(arr) {
	let newWord = [];

	for (let i = 0; i < arr.length; i++) {
		for (j = 0; j < arr.length; j++) {
			if (i === 0 && j % 2 === 0) {
				newWord.push(arr[i][j])
			} else if (i !== 0 && j % 2 === 0) {
				if (arr[i][j])
			}

			else continue
		}
	}
}

console.log(formStrings(["E>N", "P>E"]))
console.log(formStrings(["M>P", "L>A", "A>M"]))

 if (num === 6 || num === 8 || num === 10 || num === 12 || num === 14 || 
      num === 16 || num === 18) {
    return 2
  }

  if (num % 20 === 10) {
    return ((num / 20) * 2) + 2
  }

  if (num % 20 === 0) {
    return (num / 20) * 2
  }

  if (num % 6 === 0 && num !== 12 && num !== 18) {
    return 
  }