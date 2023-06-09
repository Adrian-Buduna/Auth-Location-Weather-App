const { config } = require("dotenv");
config();

module.exports = {
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_DATABASE: process.env.DB_DATABASE,
  SECRET: process.env.SECRET,
  CLIENT_URL: process.env.CLIENT_URL,
};
