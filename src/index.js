import _ from 'lodash';
import printMe from './print';

function component() {
	const element = document.createElement('div');
	const btn = document.createElement('button');
	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	btn.textContent = 'Click me for a surprise in the console!';
	btn.onclick = printMe;

	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());
