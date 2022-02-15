/**
 * Graph definitions and corresponding resolvers
 */

import { gql } from 'apollo-server';
import Db from '../db';

export const typeDefs = gql`
	type Author {
		id: ID!
		givenName: String!
		familyName: String!
	}

	type Query {
		authors: [Author!]!
	}
`;

export const resolvers = {
	Query: {
		authors: () => Db.listAuthors(),
	},
};
