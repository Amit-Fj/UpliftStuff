"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function familyRoutes(router) {
    router.get("/", (req, res) => {
        res.send("its working");
    });
}
exports.familyRoutes = familyRoutes;
