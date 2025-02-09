"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./config/database");
const app_1 = __importDefault(require("./app"));
// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});
// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv_1.default.config();
}
// Connecting to database
(0, database_1.connectDatabase)();
const server = app_1.default.listen(6000, () => {
    console.log(`Server is working on http://localhost:${6000}`);
});
// Unhandled Promise Rejection
process.on("unhandledRejection", (error) => {
    console.log(`Error: ${error.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
    server.close(() => {
        process.exit(1);
    });
});
//# sourceMappingURL=server.js.map