import { Request, Response, NextFunction } from 'express';
import { AppError, HttpStatus } from '@lunargorge/rest-utils';

export = (req: Request, res: Response, next: NextFunction) => {
    next(new AppError(HttpStatus.NotFound, undefined, 'Not Found'));
};
