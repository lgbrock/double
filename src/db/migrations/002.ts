/**
 * Migration file to add a column to nthe `authors` table
 */

import type { Knex } from "knex";

export function up(knex: Knex) {
  return knex.schema.table("authors", (table) => {
    // Country code is a 2-letter code
    // https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
    table.string("countryCode", 2).nullable();
  });
}

export function down(knex: Knex) {
  return knex.schema.table("authors", (table) => {
    table.dropColumn("countryCode");
  });
}
