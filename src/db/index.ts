/**
 * Database client
 * It's essentially a wrapper around Knex https://knexjs.org/
 */

import initKnex, { Knex } from 'knex';

import config from './config';
import type { Author } from './types';

export * from './types';

export class Db {
	private knex: Knex;

	constructor() {
		this.knex = initKnex(config.development);
	}

	public listAuthors() {
		return this.knex.table<Author>('authors').select('*').limit(10);
	}

	public async getAuthor(id: number) {
		return this.knex.table<Author>('authors').where({ id }).first();
	}

	// public listAuthorsByCountry(countryCode: string) {
	// 	return this.knex
	// 		.table<Author>('authors')
	// 		.where({ countryCode })
	// 		.select('*')
	// 		.limit(10);
	// }
}

export default new Db();
