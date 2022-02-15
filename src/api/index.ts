/**
 * Graph definitions and corresponding resolvers
 */

import { gql } from 'apollo-server';
import Db from '../db';
import Countries from '../lib/Countries';

export const typeDefs = gql`
	type Author {
		id: ID!
		displayName: String!
		familyName: String!
		givenName: String!
		countryCode: String!
	}

	type Query {
		authors: [Author!]!
	}
`;

export const resolvers = {
	Query: {
		authors: async () => {
			const authors = await Db.listAuthors();
			const countryCode = await new Countries().getCountryName('US');
			return authors.map((author) => ({
				...author,
				displayName: `${author.familyName} ${author.givenName}`,
				countryCode,
			}));
		},
	},
};
