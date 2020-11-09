
const log = require("./logger").log;
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
let dbName;

switch (process.env.NODE_ENV) {
    case "test":
        dbName = "yugiohwatch_test";
        break;
    case "production":
        dbName = "yugiohwatch";
        break;
    default:
        dbName = "yugiohwatch_dev";
}

mongoose.connect(`mongodb://${process.env.DB_IP}:27017/${dbName}`);

mongoose.connection.on("error", (err) => {
    if (err.message.indexOf("ECONNREFUSED") !== -1) {
        log.error("Error: The server was not able to reach MongoDB.\nMaybe it's not running?");
        process.exit(1);
    } else {
        throw err;
    }
});