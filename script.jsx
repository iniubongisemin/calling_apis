// How to use the Fetch API for GET Requests
// Define the API URL
const apiUrl = 'https://api.example.com/data';

// Make a GET request
fetch(apiUrl)
	.then(response => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	}) 
	.then(data => {
		console.log(data);
	})
	.catch(error => {
		console.error('Error:', error);
	});
	
// How to Handle Responses
// This modified example displays the API data in an HTML element:

const apiUrl = 'https://api.example.com/data';
const outputElement = document.getElementById('output');

fetch(apiUrl)
	.then(response => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	}) 
	.then(data => {
		// Display data in an HTML element
		outputElement.textContent = JSON.stringify(data, null, 2);
	})
	.catch(error => {
		console.error('Error:', error);
	});
	
// Handling Errors in API calls
const apiUrl = 'https://api.example.com/data';

fetch(apiUrl)
	.then(response => {
		if (!response.ok) {
			if (response.status === 404) {
				throw new Error('Data not found');
			} else if (response.status === 500) {
				throw new Error('Network response was not ok');
			}
		}
		return response.json();
	})
	.then(data => {
		outputElement.textContent = JSON.stringify(data, null, 2);
	})
	.catch(error => {
		console.error('Error:', error);
	});
	
// Making POST Requests: to be continued :)

// Working with API keys
const apiKey = 'your_api_key_here';
const apiUrl = 'https://api.example.com/data'

const requestOptions = {
	method: 'GET', 
	headers: {
		'Authorization': `Bearer ${apiKey}`,
	},
};

fetch(apiUrl, requestOptions)
	.then(response => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	})
	.then(data => {
		console.error('Error:', error);
	});
	
// Ex1: Fetching Weather Data
// Feat: Make a GET request to fetch the weather data and display it on a webpage

const apiKey = 'your_openweather_api_key';
const apiUrl = 'https://api.openweathermap.org.org/data/2.5/weather?q=London&appid=${apiKey}';

const outputElement = document.getElementById('weather-output');

fetch(apiUrl)
	.then(response => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json(); 
	})
	.then(data => {
		const temperature = data.main.temp;
		const description = data.weather[0].description;
		const location = data.name;
		outputElement.innerHTML = `<p>Temperature in ${location}: ${temperature}&#8451;C</p>
								   <p>Weather: ${description}</p>`;
	})
	.catch(error => {
		console.error('Error:', error);
	});
	
// Ex2: Posting a Form to a Server ...to be continued :)
	
