"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.index = function (req, res) {
        return res.send("get users endppoint");
    };
    UserController.prototype.create = function (req, res) {
        return res.send(req.body);
    };
    UserController.prototype.show = function (req, res) {
        throw new Error("erro");
    };
    UserController.prototype.update = function (req, res) {
        throw new Error("erro");
    };
    UserController.prototype.delete = function (req, res) {
        throw new Error("erro");
    };
    return UserController;
}());
exports.default = new UserController();
