import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.table('brand_types', (table) => {
    table.timestamp('deleted_at').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table('brand_types', (table) => {
    table.dropColumn('deleted_at');
  });
}