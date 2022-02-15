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
		pronouns: String!
		countryCode: String!
	}

	type Query {
		authors: [Author!]!
		author(id: ID!): Author
	}

	type Mutation {
		createAuthor(
			familyName: String!
			givenName: String!
			pronouns: String!
			countryCode: String!
		): Author
	}
`;

export const resolvers = {
	Query: {
		authors: async () => {
			const authors = await Db.listAuthors();
			const countryCode = await new Countries().getCountryName('US');
			return authors.map((author) => ({
				...author,
				countryCode,
				displayName: `${author.givenName} ${author.familyName}`,
			}));
		},
		author: async (root, { id }) => {
			const author = await Db.getAuthor(id);
			const countryCode = await new Countries().getCountryName('US');
			return {
				...author,
				countryCode,
				displayName: `${author.givenName} ${author.familyName}`,
			};
		},
	},
	Mutation: {
		// Create and edit author information
		createAuthor: async (
			root,
			{ displayName, familyName, givenName, pronouns, countryCode }
		) => {
			const author = await Db.createAuthor({
				displayName,
				familyName,
				givenName,
				pronouns,
				countryCode,
				id: 0,
			});
			return {
				...author,
				countryCode,
			};
		},
	},
};
