import Knex from 'knex';

// Cria e alterar campos da tabela
export async function up(knex: Knex) {
  return knex.schema.createTable('lessons', (table) => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    table
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

// Desfaz as alterações feitas no up, caso dê errado
export async function down(knex: Knex) {
  return knex.schema.dropTable('lessons');
}
