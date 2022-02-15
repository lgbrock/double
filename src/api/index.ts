/**
 * Graph definitions and corresponding resolvers
 */

import { gql } from 'apollo-server';
import Db from '../db';

export const typeDefs = gql`
	type Author {
		id: ID!
		displayName: String!
		givenName: String!
		familyName: String!
	}

	type Query {
		authors: [Author!]!
	}
`;

export const resolvers = {
	Query: {
		authors: async () => {
			const authors = await Db.listAuthors.call(Db);
			return authors.map((author) => ({
				id: author.id,
				displayName: `${author.givenName} ${author.familyName}`,
				givenName: author.givenName,
				familyName: author.familyName,
			}));
		},
	},
};
