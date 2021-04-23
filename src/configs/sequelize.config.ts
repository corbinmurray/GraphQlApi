import { Sequelize } from "sequelize";
import pgConfig from "./postgresql.config.json";

const dsn = `postgres://${pgConfig.user}:${pgConfig.password}@${pgConfig.host}:${pgConfig.port}/${pgConfig.database}`;

const sequelize = new Sequelize(dsn, {
  logging: process.env.NODE_ENV === "development" ? console.log : false,
});

const getSequelize = (): Sequelize => {
  if (sequelize) return sequelize;

  return new Sequelize(dsn, {
    logging: process.env.NODE_ENV === "development" ? console.log : false,
  });
};

export { getSequelize };
