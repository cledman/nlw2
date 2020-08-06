import path from 'path'


//exportamos com o module pq o knex não reconhece o export default
module.exports = {
    client:'sqlite3',
    connection:{
        filename:path.resolve(__dirname,'src', 'database', 'database.sqlite')
    },
    migrations:{
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true,
}