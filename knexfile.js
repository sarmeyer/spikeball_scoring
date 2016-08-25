
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/spikeball_development'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
}
};
