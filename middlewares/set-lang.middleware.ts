import { Request, Response, NextFunction } from 'express';
const i18nConfig = require('./../config/i18n.config');
const i18n = require('i18n');

export = (req: Request, res: Response, next: NextFunction) => {
    let lang: string = req.get('lang');
    lang = (lang && i18nConfig.locales.indexOf(lang) !== -1) ? lang : i18nConfig.defaultLocale;
    i18n.setLocale(lang);
    next();
};
