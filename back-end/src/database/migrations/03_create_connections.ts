import Knex from 'knex';

// Cria e alterar campos da tabela
export async function up(knex: Knex) {
  return knex.schema.createTable('connections', (table) => {
    table.increments('id').primary();

    table
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table.timestamp('created_at').defaultTo('now()').notNullable();
  });
}

// Desfaz as alterações feitas no up, caso dê errado
export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}
