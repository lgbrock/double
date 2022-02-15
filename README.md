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

```
// NOTES
fix resolvers in /api/index.ts
get authors from DB to display in the query
```

### Level 2: Author's name

Our current graph exposes 2 fields on `Author`: `givenName` and `familyName`.
The frontend team would like to get a single field `displayName` on `Author`, which would be a combination of given and family names.

👉 Expose this new field.

```
// NOTES
UPDATE /db/types.ts schema to displayName
Display new field on graphQL
- UPDATE typeDefs in /api/index.ts
Might have to update /db/migrations/001.ts
```

### Level 3: Author's country

The frontend team would like to display where the author is from. The name of their country will suffice.
We already store that information is database, but as a [2-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
We'll use a third-party API to get a country's name from its 2-letter code.
We already started a client to query this third party REST API in `src/lib/Countries.ts`.

👉 Update the client lib as necessary and update our Graph to expose author's country name.

```
// NOTES
UPDATE /lib/Countries.ts
- method? - display name?
Display new field on graphQL
- UPDATE typeDefs in /api/index.ts - countryCode or countryName
Import countries into /api/index.ts
- UPDATE resolver Query
```

### Level 4: Country-specific names

A visitor of our wiki mentioned that Japanese naming conventions arrange names as `{Family name} {Given name}`.
(Other countries also use this convention but we'll limit ourselves to Japan for this challenge).

👉 Re-visit the field `displayName` that you created in Level 2 to handle that case.

```
// NOTES
UPDATE /api/index.ts
- displayName in specific order {Family name} {Given name}
- Japan only?
```


### Level 5: Author's page

The frontend team is ready to implement individual author's pages.
They need a query to fetch a single author.

👉 Expose such a query

```
// NOTES
CREATE id in order to get single author
GET author by id
- import const { v1: uuid } = require('uuid') to create unique id for each user
UPDATE typeDefs
- id: ID!
UPDATE resolver
- by id
```

### Level 6: Author's pronouns

On an author's page, we would like to display a blurb like `She is from Nigeria`.
We have already exposed the country, but we are missing the pronouns applicable to each author.

👉 Update our database and graph to store and expose this information.

Hint: to run a database migration, use `npm run db-migrate`

```
// NOTES
Need to display pronouns for each author - She/HE
UPDATE typeDefs
- include pronoun: String!
UPDATE /db/seeds/001.ts
- might have to update this to include pronouns to be displayed
UPDATE /db/types.ts
- might have to update this to include pronouns to be displayed
```

### Level 7: Create and edit authors

A wiki wouldn't be a wiki without collaboration. We consider that all author information should be editable.
No authentication of any kind required.

👉 Add mutation(s) to create/edit author

```
create a mutation that allows for you to create/edit authors information
UPDATE typeDefs
- type Mutation { addAuthor }
UPDATE resolvers
- create Mutation: { addAuthor }
```

### Level 8: Pagination

Our wiki is pretty successful, our database of authors is growing fast!
The very simple schema we started with to list authors is now breaking, we need to make it more flexible.

👉 Refactor the authors list query to handle pagination

### Questions

Please provide your answers to the questions below:

*1. How long did you spend on this challenge?*

In total, I would say that I spent a little bit more than 3 hours finishing the challenge. I had a couple of issues with the initial setup, which took me a bit more time than expected. Also, I wasn't familiar with all of the frameworks/libraries. To be up to date with those, I took extra time, in the beginning, to freshen up on the literature and made sure I had an idea of everything before I started working through the challenges.
	
*2. How familiar were you with libs and tools used in this challenge? (Typescript, Apollo, Axios, SQL, Knex, etc)*

I was familiar with most of the libs and tools used in this exercise. However, I have never worked with Knex and still need to study it to understand its use better. The only tool that caused me issues was SQLite3. Something was happening between SQLite3 and Knex that caused the initial rendering of the app to be held up. I found that downgrading Knex solved the issue. Please see below in case this situation occurs again.

```
// How to get sqlite3 to work
First, uninstall Knex: npm uninstall knex

Then install a specific version: npm install knex@^0.95.15

Then: npm install sqlite3

Optional: npm install vscode-sqlite3
```

*3. If you had more time, what would you add or change in the codebase?*

If I had more time, I would have added unique ids to Challenges 5 and 7 to more accessible differentiate one user from the next. I found the solution below to be the easiest way to do so. 

[uuid documentation](https://www.npmjs.com/package/uuid)

`npm i uuid`

`import const { v1: uuid } = require('uuid')`

I also would have spent more time on Challenge 3. I ran into issues displaying each countries name with their 2-letter country code. However, I was able to show the full country name when I would enter the character code manually, but I needed to fix the argument in someone to display each different one by the author.

The last thing I would have done is testing with Jest. It allowed me to run several different scenarios with our schemas to get various information and data without constantly breaking the app.

*4. Do you have any constructive feedback that you would like to share with our team?*

All in all, I thought it was a great challenge! It stretched my skills but, most importantly, I learned a lot of valuable lessons along the way. There are areas where I felt I could have done better but, overall, I am pleased with what I accomplished in the allotted time.

I think 3 hours is a reasonable amount of time to finish the problems at hand, but I could have benefited with at least another hour. I also thought everything was spelled out nicely and made understanding the material more straightforward.

Thanks again for the opportunity!