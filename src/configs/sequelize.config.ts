import { Sequelize } from "sequelize";
import pgConfig from "./postgresql.config.json";

const dsn = `postgres://${pgConfig.user}:${pgConfig.password}@${pgConfig.host}:${pgConfig.port}/${pgConfig.database}`;

const sequelize = new Sequelize(dsn);

const getSequelize = (): Sequelize => {
  if (sequelize) return sequelize;

  return new Sequelize(dsn);
};

export { getSequelize };
