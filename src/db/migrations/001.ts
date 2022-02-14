/**
 * Initial creation of DB table
 */

import type { Knex } from "knex";

export function up(knex: Knex) {
  return knex.schema.createTable("authors", (table) => {
    table.increments("id");

    table.string("givenName").notNullable();
    table.string("familyName").notNullable();
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable("authors");
}
