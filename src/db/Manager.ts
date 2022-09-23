import { Logger } from '../utils/Logger';
const logger = new Logger("qilin-db", "#3b788e")

import * as fs from 'fs';
import * as path from 'path'

export default class DBManager {

    public constructor(){ 
        this.registerModels();
    };

    private async registerModels() {
        let stream = fs.createWriteStream("./src/db/models/index.ts", {flags: 'a'});
        fs.readdirSync('./src/db/models').forEach((model) => {
            let file = path.basename(`./src/db/models/${model}`)
            let name = path.basename(`./src/db/models/${model}`, path.extname(`./src/db/models/${model}`))
            if (! model.includes("index.ts")) {
                stream.write(`export * as ${name} from '${name}'\n`)
                logger.debug(`Loaded model: ${name} from ${file}!`);
            }
        })
        stream.end();
    }
}