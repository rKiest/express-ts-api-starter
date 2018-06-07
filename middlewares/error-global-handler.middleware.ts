import { Request, Response, NextFunction } from 'express';
import { HttpStatus } from '@lunargorge/rest-utils';
import { logger } from './../tools';

export = (err: any, req: Request, res: Response, next: NextFunction) => {
    const status = (err.hasOwnProperty('status'))
        ? err.status : (err.hasOwnProperty('code')) ? err.code : HttpStatus.InternalServerError;

    logger.error({
        ip: req.ip,
        method: req.method,
        path: req.originalUrl,
        code: status,
        message: err.message || '',
        stack: err.stack || ''
    });

    res.status(status);
    res.json([{
        code: status,
        field: undefined,
        message: err.message || 'Internal Server Error'
    }]);
};
