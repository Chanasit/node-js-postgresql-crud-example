module.exports = {
  apps : [{
    name: "app",
    script: "./server.js",
    env: {
      NODE_ENV: "development",
      PORT: 4000,
      HOST: "localhost",
      USER: "postgres",
      PASSWORD: "123",
      DB: "testdb",
      dialect: "postgres",
      pool_max: 5,
      pool_min: 50,
      pool_acquire: 30000,
      pool_idle: 10000,
    },
    env_production: {
      NODE_ENV: "production",
      PORT: 3000,
      HOST: "postgres",
      USER: "postgres",
      PASSWORD: "123",
      DB: "testdb",
      dialect: "postgres",
      pool_max: 5,
      pool_min: 50,
      pool_acquire: 30000,
      pool_idle: 10000,
    }
  }]
}
