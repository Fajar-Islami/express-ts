"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    UserRoutes.prototype.routes = function () {
        this.router.get("/", function (req, res) {
            res.send("Ini routes index user");
        });
        this.router.post("/", function (req, res) {
            res.send(req.body);
        });
    };
    return UserRoutes;
}());
exports.default = new UserRoutes().router;
