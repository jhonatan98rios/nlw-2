import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    table.integer('user_id') // Relacionamento
      .notNullable() // Requerido
      .references('id') // Se conecta a um id
      .inTable('users') // Da tabela de usuários (prof)
      .onUpdate('CASCADE') // Oq ocorre em caso de atualização
      .onDelete('CASCADE') // Oq ocorre em caso de exclusão
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('classes');
}