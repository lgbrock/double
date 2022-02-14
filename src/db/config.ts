/**
 * Basic DB configuration
 * DO NOT EDIT
 */

import type { Knex } from "knex";
import { join } from "path";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: join(__dirname, "data.sqlite3"),
    },
    useNullAsDefault: true,
    migrations: {
      directory: join(__dirname, "migrations"),
    },
    seeds: {
      directory: join(__dirname, "seeds"),
    },
  },
};

export default config;
