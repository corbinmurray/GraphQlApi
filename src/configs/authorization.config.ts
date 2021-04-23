import { API_KEY } from "./tempApiKey.config";

const authKey = "authorization-key";

export const authorizationMiddleware = (req, res, next) => {
  if (!req.headers[authKey]) {
    return res.sendStatus(401);
  }

  if (req.headers[authKey] !== API_KEY) {
    return res.sendStatus(401);
  }

  next();
};
