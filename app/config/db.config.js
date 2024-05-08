module.exports = {
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
  dialect: process.env.dialect,
  pool: {
    max: process.env.pool_max,
    min: process.env.pool_min,
    acquire: process.env.pool_acquire,
    idle: process.env.pool_idle
  }
};
