import { Logger } from './utils/Logger';
const logger = new Logger("qilin-http(s)", "#6198cc");

import Api from './https/api';
import NotificationController from './apps/Notifications';

const api = new Api(
    [
        new NotificationController,
    ]
);
api.listen();

function loggerTest() {
    logger.debug("Debug!");
    logger.log("Log!");
    logger.warn("Warn!");
    logger.error("Error!");

};