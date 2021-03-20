import { DeviceUp } from "../../models/DeviceUp";

const getAllDataHandler = async (parent, args, context, info) => {
  const device_eui = args.device_eui;

  const deviceUpModels = await DeviceUp.findAll({
    where: { device_eui: device_eui },
  });

  console.log(deviceUpModels)
};

const Query = {
  getAllData: getAllDataHandler,
};

export { Query };
