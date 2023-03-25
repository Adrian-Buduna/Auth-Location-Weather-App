const { config } = require("dotenv");
config();

module.exports = {
  API_KEY: process.env.API_KEY_ENV,
};
