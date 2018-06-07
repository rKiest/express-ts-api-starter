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
import { utils } from '@lunargorge/rest-utils';

// Define the configuration settings for the file and console transports in the logger configuration
const opt = {
    file: {
        level: 'debug',
        filename: `${appRoot}/logs/app-${utils.signature}.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 3,
        colorize: false,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: true,
        colorize: false,
    },
};

const transporters = [];
transporters.push(new winston.transports.File(opt.file));
if (process.env.IS_DEBUG) {
    transporters.push(new winston.transports.Console(opt.console));
}

export = transporters;
