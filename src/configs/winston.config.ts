import winston from "winston";

const level = () => {
  const env = process.env.NODE_ENV || "development";
  const isDev = env === "development";

  return isDev ? "debug" : "info";
};
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};
const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

// TODO: Find a good place for all of the logs to reside
const transports = [
  new winston.transports.Console({
    format: winston.format.colorize({ all: true, colors: colors }),
  }),
  new winston.transports.File({
    filename: "logs/error.log",
    level: "error",
  }),
  new winston.transports.File({ filename: "logs/requests.log", level: "http" }),
  new winston.transports.File({ filename: "logs/info.log", level: "info" }),
  new winston.transports.File({ filename: "logs/debug_warn.log" }),
];

const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

const getLogger = (): winston.Logger => {
  if (logger) return logger;

  return winston.createLogger({
    level: level(),
    levels,
    format,
    transports,
  });
};

export { getLogger };
