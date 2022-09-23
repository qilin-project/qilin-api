import { Logger } from '../utils/Logger';
const logger = new Logger("qilin-http(s)", "#6198cc");

import config from '../utils/Config';

import * as express from 'express';
import * as bodyParser from 'body-parser';

export default class Api {
    private app: express.Application;
    private port: number;

    public constructor(controllers: object[]) {
        this.app = express.application;
        this.port = config.api.port;

        this.initMiddleware();
        this.initControllers(controllers);
    }

    private initMiddleware() {
        this.app.use(bodyParser.json())
    }

    private initControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('api/', controller.router);
        })
    };

    public listen() {
        this.app.listen(this.port, () => {
            logger.start(`Listening on port ${this.port}!`);
        })
    }
};