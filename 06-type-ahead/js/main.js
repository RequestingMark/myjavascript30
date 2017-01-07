const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
	.then(blob => blob.json())
	.then(data => cities.push(...data));

function displayMatches() {
	const matchArray = findMatches(this.value, cities);
	const html = matchArray.map(place => {
		const regex = new RegExp(this.value, 'gi');
		const cityName = place.city.replace(regex, `<span class="search-form__highlight">${this.value}</span>`);
		const stateName = place.state.replace(regex, `<span class="search-form__highlight">${this.value}</span>`);
		return `
		<li class="search-form__suggestion">
			<span class="search-form__name">${cityName}, ${stateName}</span>
			<span class="search-form__population">${numberWithCommas(place.population)}</span>
		</li>
		`;
	}).join('');
	suggestions.innerHTML = html;
}

function findMatches(textToMatch, cities) {
	return cities.filter(place => {
		const regex = new RegExp(textToMatch, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const searchInput = document.querySelector('.search-form__search');
const suggestions = document.querySelector('.search-form__suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);