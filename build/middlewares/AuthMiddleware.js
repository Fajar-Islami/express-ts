"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
var auth = function (req, res, next) {
    var tauth = false;
    if (tauth) {
        next();
    }
    return res.sendStatus(403);
};
exports.auth = auth;
