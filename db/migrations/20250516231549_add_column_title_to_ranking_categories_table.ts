import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('ranking_categories', (table) => {
    table.string('title').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('ranking_categories', (table) => {
    table.dropColumn('title');
  });
}
