import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id').primary();

    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();

    table.integer('class_id') // Relacionamento
      .notNullable() // Requerido
      .references('id') // Se conecta a um id
      .inTable('classes') // Da tabela de usuários (classes)
      .onUpdate('CASCADE') // Oq ocorre em caso de atualização
      .onDelete('CASCADE') // Oq ocorre em caso de exclusão
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('class_schedule');
}