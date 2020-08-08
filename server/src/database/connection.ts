import knex from 'knex'
import path from 'path'

//Connection

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,  
})

// Migrations



export default db