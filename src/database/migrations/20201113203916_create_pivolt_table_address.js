exports.up = knex => knex.schema.createTable('address', table => {
    table.increments('id')
        
    table.string('street').notNullable()
    table.string('neighborhood').notNullable()
    table.decimal('number').notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

    table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')
    //table.foreign('user_id').references('id').inTable('users')
    
})

exports.down = knex => knex.schema.dropTable('address')
