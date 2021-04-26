import { API_KEY } from "./tempApiKey.config";

const authKey = "x-auth-key";

export const authorizationMiddleware = (req, res, next) => {
  if (!req.headers[authKey] || req.headers[authKey] !== API_KEY) {
    return res.sendStatus(401);
  }

  next();
};
