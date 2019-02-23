const path = require('path');
const i18n = require('i18n');
const morgan = require('morgan');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerSpec = swaggerJSDoc(require('./config/swagger.config'));
const i18nConfig = require('./config/i18n.config');

import * as bodyParser from 'body-parser';
import * as express from 'express';
import { logger } from './tools';
import { HttpStatus } from '@lunargorge/rest-utils';

i18n.configure(i18nConfig);

const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('./middlewares/request-logger.middleware'));
app.use(require('./middlewares/set-lang.middleware'));
app.use(morgan('combined', { stream: logger.stream }));

// routes
app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});
app.get('/api-docs/*', (req, res) => res.sendFile(path.resolve(__dirname + '/..' + req.path)));
app.get('/favicon.ico', (req, res) => res.sendStatus(HttpStatus.NotContent));
app.use('/', require('./src/routes/default'));
app.use('/', require('./src/routes/health-check'));

// routes v1
app.use('/', require('./src/routes/v1/greeting/all'));
app.use('/', require('./src/routes/v1/greeting/save'));

// middleware error handlers
app.use(require('./middlewares/error-404.middleware'));
app.use(require('./middlewares/error-global-handler.middleware'));

// @todo: typeorm ...
// https://github.com/typeorm/typescript-express-example
// https://jjude.com/hapi-orm/
// https://github.com/DanielDent/docker-postgres-replication/blob/master/docker-compose.yml
// createConnection().then(async connection => {
//     app.listen(3000);
// });

app.listen(3000);
