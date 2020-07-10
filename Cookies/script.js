const output = document.querySelector('.output');
const buttons = document.querySelectorAll('button');
const getValues = document.querySelectorAll('input');

buttons.forEach(button => {
	button.addEventListener('click', buttonAction);
});

function buttonAction() {
	const cookie = event.target.id;
	let valueFromAllInputs = {};
	getValues.forEach((value, index) => {
		let tempName = value.getAttribute('name');
		let tempValue = tempName ? value.value : '';
		valueFromAllInputs[tempName] = tempValue;
	});
	console.log(valueFromAllInputs);

	if (cookie === 'set') {
		setCookie(valueFromAllInputs.cookieName, valueFromAllInputs.cookieValue);
	} else if (cookie === 'get') {
		getCookie(valueFromAllInputs.cookieName);
	} else if (cookie === 'all') {
		listCookies();
	}
}

function setCookie(name, value) {
	const now = new Date();
	now.setMonth(now.getMonth() + 1);
	if (value.length && name.length > 0) {
		document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + now.toUTCString();
		output.textContent = ' Cookie ' + name + ' Set ' + value;
	} else {
		output.textContent = 'Cookie needs a value';
	}
}

function getCookie(name) {
	let cookies = document.cookie.split(';');
	output.textContent = 'No Cookies Found';
	cookies.forEach(item => {
		item = item.trim();
		let tempCookie = item.split('=');
		if (tempCookie[0] === name) {
			output.textContent = 'Found: ' + tempCookie[0].trim() + ' ' + decodeURIComponent(tempCookie[1]);
		}
	});
}

function listCookies() {
	let cookies = document.cookie.split(';');
	cookies.forEach(item => {
		item = item.trim();
		let tempCookie = item.split('=');
		let div = document.createElement('div');
		div.textContent = tempCookie[0].trim() + ' ' + decodeURIComponent(tempCookie[1]);
		output.appendChild(div);
	});
}
