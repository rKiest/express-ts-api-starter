import { IErrorExpressValidatorItem } from './error-format.interface';
import { IError } from '@lunargorge/rest-utils';
const i18n = require('i18n');

export const expressValidatorErrorFormatter = (expError: IErrorExpressValidatorItem): IError => {
    return {
        code: 0,
        field: expError.param,
        message: i18n.__(expError.msg)
    };
};
