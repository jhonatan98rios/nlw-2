import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();

    table.integer('user_id') // Relacionamento
      .notNullable() // Requerido
      .references('id') // Se conecta a um id
      .inTable('users') // Da tabela de usuários (classes)
      .onUpdate('CASCADE') // Oq ocorre em caso de atualização
      .onDelete('CASCADE') // Oq ocorre em caso de exclusão

    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP')).notNullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}