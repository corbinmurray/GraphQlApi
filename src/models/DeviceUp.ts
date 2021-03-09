import { Model, DataTypes } from "sequelize";
import { getSequelize } from "../configs/sequelize.config";

const sequelize = getSequelize();

class DeviceUp extends Model {}

DeviceUp.init(
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
      type: DataTypes.BLOB,
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
  { sequelize, modelName: "DeviceUp", tableName: "device_up" }
);

export { DeviceUp };
