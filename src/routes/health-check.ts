import { Request, Response } from 'express';

const router = require('express').Router();

router.get('/health-check', (req: Request, res: Response) => {
    res.json({title: 'health-check'});
});

export = router;