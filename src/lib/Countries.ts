/**
 * A client for a public API providing information about countries.
 * Documentation available here: https://restcountries.com/
 */

/**
 * Axios is used as HTTP client
 * https://www.npmjs.com/package/axios
 */
import axios from 'axios';

/**
 * Methods from https://restcountries.com/ return the data formated below.
 * Many more properties are returned by the API but only these ones are of interest to us.
 */
interface Country {
	cca2: string; // 2-letter code https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
	name: {
		common: string;
	};
}

export default class Countries {
	private restApi = axios.create({
		baseURL: 'https://restcountries.com/v3.1',
	});

	/**
	 * Example of how to query the rest API.
	 * @param name Country name to search fror
	 * @returns List of countries matching searched term
	 */
	public async searchByName(name: string) {
		const { data } = await this.restApi.get<Country[]>(
			`/name/${encodeURIComponent(name)}`
		);

		return data;
	}

	// 🗺 Add your method(s) here
	// display full country name with countryCode
	public async getCountryName(countryCode: string) {
		const { data } = await this.restApi.get<Country[]>(
			`/alpha/${encodeURIComponent(countryCode)}`
		);

		return data[0].name.common;
	}
}
