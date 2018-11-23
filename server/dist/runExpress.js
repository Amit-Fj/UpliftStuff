"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const express_1 = require("express");
function setupExpress(defineRoutes) {
    const server = express();
    const router = express_1.Router();
    defineRoutes(router);
    server.use("/", router);
    return server;
}
function runExpress(port, definingRoutes) {
    const server = setupExpress(definingRoutes);
    const listener = server.listen(port, () => {
        console.info(`Started server on port ${port}`);
    });
}
exports.runExpress = runExpress;
