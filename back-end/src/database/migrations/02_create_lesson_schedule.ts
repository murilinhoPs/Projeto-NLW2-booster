import Knex from 'knex';

// Cria e alterar campos da tabela
export async function up(knex: Knex) {
  return knex.schema.createTable(
    'lesson_schedule',
    (table) => {
      table.increments('id').primary();

      table.integer('week-day').notNullable();
      table.integer('from').notNullable();
      table.integer('to').notNullable();

      table
        .integer('lesson_id')
        .notNullable()
        .references('id')
        .inTable('lessons')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    }
  );
}

// Desfaz as alterações feitas no up, caso dê errado
export async function down(knex: Knex) {
  return knex.schema.dropTable('lesson_schedule');
}
