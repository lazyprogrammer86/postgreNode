const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    port: 5432,
    database: 'api',
    password: 'password',
});

//connection
pool.connect()
    .then((connection) => {
        console.log(`Connected to the database ${connection.database}`)
    }).catch(err => {
        console.log(err.message)
    })

module.exports = pool;