import { config } from "dotenv";
import { Sequelize } from "sequelize";

config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    define: {
      freezeTableName: true,
    },
  }
);

export default sequelize;
