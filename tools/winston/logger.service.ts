// Winston uses npm logging levels that are prioritized from 0 to 5 (highest to lowest)
// 0: error
// 1: warn
// 2: info
// 3: verbose
// 4: debug
// 5: silly
// For example, by specifying a level of info, anything at level error, warn, or info will be logged.

const appRoot = require('app-root-path');
const winston = require('winston');
const transports = require('./../../config/logger.config');

// Instantiate a new logger logger with file and console transports using the properties defined in the options variable
const winstonLogger = new winston.Logger({
    transports: transports,
    exitOnError: false, // do not exit on handled exceptions
});

// By default, morgan outputs to the console only, so let's define a stream function that will be able
// to get morgan-generated output into the logger log file
winstonLogger.stream = {
    write: function(message: any, encoding: any) {
        logger.info(message);
    },
};

winstonLogger.responseWhitelist = ['body'];

export const logger = winstonLogger;
