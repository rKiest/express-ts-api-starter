import { Request, Response } from 'express';
import { saveValidator } from './../../../shared/validators';
import { IGreeting } from './../../../shared/dto';
import { HttpStatus } from '@lunargorge/rest-utils';
import { expressValidatorErrorFormatter } from './../../../../tools';

const router = require('express').Router();
const { validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');

/**
 * @swagger
 * /v1/greeting:
 *   post:
 *     tags:
 *       - Greeting
 *     description: Greeting
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Example request - greeting
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Greeting'
 *     responses:
 *       200:
 *         description: Return greeting
 *         content:
 *         application/json': {}
 *         schema:
 *           $ref: '#/definitions/Greeting'
 *       4**-5**:
 *         description: Errors 422, 500
 *         content:
 *         application/json': {}
 *         schema:
 *           $ref: '#/definitions/ErrorsResponse'
 */
router.post('/v1/greeting', saveValidator, (req: Request, res: Response) => {
    try {
        const errors = validationResult(req).formatWith(expressValidatorErrorFormatter);
        if (!errors.isEmpty()) return res.status(HttpStatus.UnprocessableEntity).json(errors.array());

        const data = <IGreeting>matchedData(req);
        // process ...

        data['id'] = 100;
        res.json(data);
    } catch (err) {
        throw err;
    }
});

export = router;
