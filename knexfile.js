module.exports = {
  development: { 
    client: 'sqlite3',
    debug: true,
    connection: {
      filename: 'dev.db'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
