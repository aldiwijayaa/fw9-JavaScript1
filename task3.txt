const printSegitiga = 5;

for (let i = printSegitiga; i >= 1; i--) {
	let int = '';

	for (let j = 1; j <= i; j++) {
		int += j;
	}
	console.log(int);
}