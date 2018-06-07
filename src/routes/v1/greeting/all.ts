import { Request, Response } from 'express';

const router = require('express').Router();

/**
 * @swagger
 * /v1/greeting:
 *   get:
 *     tags:
 *       - Greeting
 *     description: Get all greetings
 *     responses:
 *       200:
 *         description: Return all greetings
 *         content:
 *         application/json': {}
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Greeting'
 *       4**-5**:
 *         description: Errors 401, 403, 404, 422, 500
 *         content:
 *         application/json': {}
 *         schema:
 *           $ref: '#/definitions/ErrorsResponse'
 */
router.get('/v1/greeting', (req: Request, res: Response) => {
    try {
        res.json([
            {id: 1, title: 'Hello World', desc: 'Hello World !'},
            {id: 2, title: 'Hello World', desc: 'Hello World !'}
        ]);
    } catch (err) {
        throw err;
    }
});

export = router;
