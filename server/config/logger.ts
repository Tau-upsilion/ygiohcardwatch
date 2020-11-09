const winston = require("winston");

export const log = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: "debug",
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});