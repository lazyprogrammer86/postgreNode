const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    port: 5432,
    database: 'api',
    password: 'password',
});

module.exports = pool;