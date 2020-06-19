import axios from 'axios';

const url = 'http://cors-anywhere.herokuapp.com/http://api.tvmaze.com/shows';

export const fetchData = async (showNumber) => {
	try {
		const apiPromise = await axios.get(url);
		const jsonData = apiPromise.data

		return jsonData
	} catch (error) {
		console.log(error)
	}
};

// export const fetchDailyData = async () => {
// 	try {
// 		const { data } = await axios.get(`${url}/daily`);

// 		const modifiedData = data.map(dailyData => ({
// 			confirmed: dailyData.confirmed.total,
// 			deaths: dailyData.deaths.total,
// 			date: dailyData.reportDate
// 		}));

// 		return modifiedData;
// 	} catch (error) {}
// };
// export const fetchCountries = async () => {
// 	try {
// 		const { data: { countries } } = await axios.get(`${url}/countries`);
// 		return countries.map(country => country.name);
// 	} catch (error) {}
// };
