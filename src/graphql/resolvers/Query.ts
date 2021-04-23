/*************************************

Created On: 04-23-2021
Author: Corbin Murray
Description: The Query resolver will provide methods that allow node users to query for their data. This should not include any action other than 
reading from the database. Unless, of course, the project turns and that is a needed feature.

*************************************/

import { Op } from "sequelize";
import { IGetAllDataArguments } from "../../interfaces/GraphQLRequestArguments/IGetAllDataArguments";
import { IGetDataInRangeArguments } from "../../interfaces/GraphQLRequestArguments/IGetDataInRangeArguments";
import { DeviceUp } from "../../models/DeviceUp";
import { getLogger } from "../../configs/winston.config";

const logger = getLogger();

const Query = {
  getAllData: getAllDataHandler,
  getDataInRange: getDataInRangeHandler,
};


async function getAllDataHandler(
  parent,
  args: IGetAllDataArguments,
  context,
  info
) {
  try {
    const deviceUpModels = await DeviceUp.findAll({
      where: { device_name: args.device_name },
    });

    return deviceUpModels.map((model) => model.toJSON());
  } catch (err) {
    logger.error(err.message);
    return null;
  }
}

async function getDataInRangeHandler(
  parent,
  args: IGetDataInRangeArguments,
  context,
  info
) {
  try {
    const deviceUpModels = await DeviceUp.findAll({
      where: {
        device_name: args.device_name,
        received_at: {
          [Op.gte]: args.start_date_utc,
          [Op.lte]: args.end_date_utc,
        },
      },
    });

    return deviceUpModels.map((model) => model.toJSON());
  } catch (err) {
    logger.error(err.message);
    return null;
  }
}

export { Query };
