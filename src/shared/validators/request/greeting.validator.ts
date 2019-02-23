const { check } = require('express-validator/check');

export const saveValidator = [
    check('title')
        .exists().trim().withMessage('errors.requiredField'),
    check('desc')
        .exists().trim().withMessage('errors.requiredField')
        .custom((value: string) => {
            return new Promise((resolve, reject) => {
                if (value.length <= 5) {
                    return reject('errors.toShort');
                }
                resolve();
            });
        }),
        // @todo: add time
        check('time').exists(),
        // others fields
];
