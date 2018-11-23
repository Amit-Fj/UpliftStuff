"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const runExpress_1 = require("./runExpress");
const familyRoutes_1 = require("./routing/familyRoutes");
function makeIgnition() {
    return {
        startApi: startApi
    };
}
exports.makeIgnition = makeIgnition;
function startApi() {
    runExpress_1.runExpress(Number(process.env.PORT), router => familyRoutes_1.familyRoutes(router));
}
