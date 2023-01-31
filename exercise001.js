async function getPromiseResponse() {
	const promise = new Promise((resolve, reject) => {
		// Generate random number between 0 and 9
		const randomInt = Math.floor(Math.random() * 10);
	
		if (randomInt % 2 === 0) {
			// Success
			setTimeout(() => resolve('done'), 2000);
		} else {
			// Failure
			setTimeout(() => reject('error'), 2000);
		}
	});
	let result = await promise; // wait until the promise resolves (*)

	if (result === 'done') {
		console.log(`Yay! Promise resolved with response: ${result}`);
	}
}

getPromiseResponse()
	.catch(e => { 
		console.log(`Boo. Promise rejected with response: ${e}`) 
	});

