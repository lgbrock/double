/**
 * Initial seed data inserted in DB
 */

import type { Knex } from "knex";

export async function seed(knex: Knex) {
  await knex("authors").delete();

  await knex("authors").insert([
    {
      givenName: "Joan",
      familyName: "Didion",
      countryCode: "US",
    },
    {
      givenName: "Paul",
      familyName: "Beatty",
      countryCode: "US",
    },
    {
      givenName: "Émile",
      familyName: "Zola",
      countryCode: "FR",
    },
    {
      givenName: "Haruki",
      familyName: "Murakami",
      countryCode: "JP",
    },
    {
      givenName: "Virginia",
      familyName: "Woolf",
      countryCode: "GB",
    },
    {
      givenName: "Gabriel",
      familyName: "García Márquez",
      countryCode: "CO",
    },
    {
      givenName: "Fatou",
      familyName: "Diome",
      countryCode: "FR",
    },
    {
      givenName: "Thomas",
      familyName: "Mann",
      countryCode: "DE",
    },
    {
      givenName: "Chimamanda",
      familyName: "Adichie",
      countryCode: "NG",
    },
  ]);
}
