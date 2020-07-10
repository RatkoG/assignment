const post = async (url, data) => {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	const resData = await response.json();
	if (resData.data && resData.data.products) {
		if (resData.data.products[0].id === 'abacab') {
			console.log('success');
		} else {
			console.log('The ID does not match');
		}
	} else {
		console.log('That data does NOT exist here...');
	}

	return resData;
};

const data = {
	name: 'Ratko Gjurichanin',
	username: 'gjurich',
	email: 'rgjur@sample.ca',
	// Uncomment data and you will get SUCCESS
	// Change id:"hello hello" you will get The ID does not match
	// data: { products: [{ id: 'abacab' }] },
};

// Create Post
post('https://jsonplaceholder.typicode.com/users', data);
