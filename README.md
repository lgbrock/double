# [Double](https://withdouble.com) · Full-stack engineering challenge

:wave: If you're looking for an adventure, [look no further](https://withdouble.com/jobs).

## Instructions

- To complete this challenge, you will need `npm`, `node` and `git` installed locally
- Solve each level in order
- Include the `.git` directory when submitting your solution
- Don't spend more than **3 hours** on this test
- To initialize the app:
  - run `npm run once` (will install dependencies and initialize a SQLite database with some data)
- To start the app:
  - run `npm start` (will auto-restart on changes)
- If needed, here are the documentation of libraries used in this challenge (existing code should provide enough insights to avoid refering heavily, if at all, to these):
  - [Axios](https://www.npmjs.com/package/axios)
  - [Knex](https://knexjs.org/)
  - [Apollo Server](https://www.apollographql.com/docs/apollo-server/)

### Pointers

- Keep in mind that you are working on an existing code-base.
- Code should be clean, extensible and robust. Don't overlook edge cases.
- Parts of the instructions have been left vague enough for you to demonstrate your API design skills.
- Feel free to install additional dependencies if needed.
- The code-base should be self-explanatory. Start by taking a couple minutes to go over `src` and familiarize yourself with it.
- Although the code-base is simple, apply good practices as you would on a "regular" production API.
- We like [emojis](https://gitmoji.carloscuesta.me/) :wink:

### Submitting your results

- Create a .zip of your challenge folder (include the `.git` directory)
- Send your challenge as well as your answers to the final questions to `engineering@withdouble.com`

We will review your code within 3 days and will be in touch via email

Let's do this! :muscle:

## Challenge

We are starting a wiki to list literature authors.

### Level 1: Empty list of authors

It looks like querying for authors returns an empty list, although we have a few of them in database.

👉 Identify the source of this behavior and fix it.

### Level 2: Author's name

Our current graph exposes 2 fields on `Author`: `givenName` and `familyName`.
The frontend team would like to get a single field `displayName` on `Author`, which would be a combination of given and family names.

👉 Expose this new field.

### Level 3: Author's country

The frontend team would like to display where the author is from. The name of their country will suffice.
We already store that information is database, but as a [2-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
We'll use a third-party API to get a country's name from its 2-letter code.
We already started a client to query this third party REST API in `src/lib/Countries.ts`.

👉 Update the client lib as necessary and update our Graph to expose author's country name.

### Level 4: Country-specific names

A visitor of our wiki mentioned that Japanese naming conventions arrange names as `{Family name} {Given name}`.
(Other countries also use this convention but we'll limit ourselves to Japan for this challenge).

👉 Re-visit the field `displayName` that you created in Level 2 to handle that case.

### Level 5: Author's page

The frontend team is ready to implement individual author's pages.
They need a query to fetch a single author.

👉 Expose such a query

### Level 6: Author's pronouns

On an author's page, we would like to display a blurb like `She is from Nigeria`.
We already expose the country, but we are missing the pronouns applicable to each author.

👉 Update our database and graph to store and expose this information.

Hint: to run a database migration, use `npm run db-migrate`

### Level 7: Create and edit authors

A wiki wouldn't be a wiki without collaboration. We consider that all author information should be editable.
No authentication of any kind required.

👉 Add mutation(s) to create/edit author

### Level 8: Pagination

Our wiki is pretty successful, our database of authors is growing fast!
The very simple schema we started with to list authors is now breaking, we need to make it more flexible.

👉 Refactor the authors list query to handle pagination

### Questions

Please provide your answers to the questions below:

1. How long did you spend on this challenge?
2. How familiar were you with libs and tools used in this challenge? (Typescript, Apollo, Axios, SQL, Knex, etc)
3. If you had more time, what would you add or change in the codebase?
4. Do you have any constructive feedback that you would like to share with our team?
