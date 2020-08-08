import Knex from 'knex';

// Cria e alterar campos da tabela
export async function up(knex: Knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  });
}

// Desfaz as alterações feitas no up, caso dê errado
export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}
