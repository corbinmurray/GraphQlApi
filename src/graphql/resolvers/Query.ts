import { DeviceUp } from "../../models/DeviceUp";

const getAllDataHandler = async (parent, args, context, info) => {
  const device_eui = args.device_eui;

  const deviceUpModels = await DeviceUp.findAll({
    where: { device_eui: device_eui },
  });

  return deviceUpModels.map(model => model.toJSON());
};


// For the date range query we need to verify how ChirpStack saves the dates (locale vs UTC)

const Query = {
  getAllData: getAllDataHandler,
};

export { Query };
