# NumPad

Widget that displays a number pad with an accumulator and `enter` button.

It only allows integer inputs.

## Usage
~~~
	// create a NumPad instance
	const numPad = new UBOW.NumPad('#num-pad', {
		onSubmit: (val) => {
			console.log(`NumPad: ${val}`);
			},
		});

	// reset to 0
	numPad.reset();

	// set to some arbitray integer
	numPad.reset();
~~~