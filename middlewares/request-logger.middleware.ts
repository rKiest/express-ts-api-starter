import { Request, Response, NextFunction } from 'express';
import { logger } from './../tools';

const getPasswordFieldNameInBody = (body: any): string | undefined => {
    if (!body) {
        return undefined;
    }

    const pwdFields = ['password', 'pwd', 'pass', 'haslo'];
    const pwdFieldsLength = pwdFields.length;
    let name = '';

    for (let i = 0; i < pwdFieldsLength; i++) {
        name = pwdFields[ i ];
        if (body.hasOwnProperty(name)) return name;
    }

    return undefined;
};

export = (req: Request, res: Response, next: NextFunction) => {

    let password = '';
    const passwordFieldName = getPasswordFieldNameInBody(req.body);
    if (passwordFieldName) {
        password = req.body[ passwordFieldName ];
        req.body[ passwordFieldName ] = '';
    }

    logger.info({
        method: req.method,
        url: req.headers['host'] || '',
        path: req.path,
        query: req.query,
        params: req.params,
        body: req.body,
    });

    // after log
    if (passwordFieldName) {
        req.body[ passwordFieldName ] = password;
    }

    next();
};
