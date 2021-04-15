import { Op } from "sequelize";
import { IGetAllDataArguments } from "../../interfaces/GraphQLRequestArguments/IGetAllDataArguments";
import { IGetDataInRangeArguments } from "../../interfaces/GraphQLRequestArguments/IGetDataInRangeArguments";
import { DeviceUp } from "../../models/DeviceUp";

const Query = {
  getAllData: getAllDataHandler,
  getDataInRange: getDataInRangeHandler,
};

// TODO: Add validation to device_name arguments
// TODO: Add try-catch with logging

async function getAllDataHandler(
  parent,
  args: IGetAllDataArguments,
  context,
  info
) {
  const deviceUpModels = await DeviceUp.findAll({
    where: { device_name: args.device_name },
  });

  return deviceUpModels.map((model) => model.toJSON());
}

async function getDataInRangeHandler(
  parent,
  args: IGetDataInRangeArguments,
  context,
  info
) {
  const deviceUpModels = await DeviceUp.findAll({
    where: {
      device_name: args.device_name,
      received_at: {
        [Op.gte]: args.start_date_utc,
        [Op.lte]: args.end_date_utc,
      },
    },
  });

  if (deviceUpModels.length === 0) {
    return null;
  }

  return deviceUpModels.map((model) => model.toJSON());
}

export { Query };
