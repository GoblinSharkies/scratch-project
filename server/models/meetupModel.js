const { Pool } = require('pg');

const PG_URI = 'postgres://mclhgmni:A_0e62HiTHMmNkgLY3s9oMeLAecSP_j3@rajje.db.elephantsql.com/mclhgmni';

const pool = new Pool({
  connectionString: PG_URI
});



module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};