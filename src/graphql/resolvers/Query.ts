import { DeviceUp } from "../../models/DeviceUp";

const Query = {
  getAllData: getAllDataHandler,
  getDataInRange: getAllDataHandler,
};

async function getAllDataHandler(parent, args, context, info) {
  const dev_eui: string = args.dev_eui;

  const deviceUpModels = await DeviceUp.findAll({
    where: { dev_eui: `\\x${dev_eui}` },
  });

  return deviceUpModels.map((model) => model.toJSON());
}

async function getDataInRangeHandler(parent, args, context, info) {
  console.log(args);

  return null;
}

export { Query };
