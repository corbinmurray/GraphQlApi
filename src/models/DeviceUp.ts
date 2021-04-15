import { Model, DataTypes } from "sequelize";
import { getSequelize } from "../configs/sequelize.config";

const sequelize = getSequelize();

// class DeviceUp extends Model {}

// received_at is in ISO 8601 format
// https://en.wikipedia.org/wiki/ISO_8601

const DeviceUp = sequelize.define(
  "DeviceUp",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    received_at: {
      type: DataTypes.DATE,
    },
    dev_eui: {
      type: DataTypes.BLOB,
    },
    device_name: { type: DataTypes.STRING(100) },
    application_id: {
      type: DataTypes.BIGINT,
    },
    application_name: {
      type: DataTypes.STRING(100),
    },
    frequency: {
      type: DataTypes.BIGINT,
    },
    dr: {
      type: DataTypes.SMALLINT,
    },
    adr: {
      type: DataTypes.BOOLEAN,
    },
    f_cnt: {
      type: DataTypes.BIGINT,
    },
    f_port: {
      type: DataTypes.SMALLINT,
    },
    tags: {
      type: DataTypes.HSTORE,
    },
    data: {
      type: DataTypes.BLOB,
    },
    rx_info: {
      type: DataTypes.JSONB,
    },
    object: {
      type: DataTypes.JSONB,
    },
  },
  {
    modelName: "DeviceUp",
    tableName: "device_up",
    createdAt: false,
    updatedAt: false,
  }
);

export { DeviceUp };
