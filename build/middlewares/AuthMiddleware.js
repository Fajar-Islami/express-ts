"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const auth = (req, res, next) => {
    let tauth = false;
    if (tauth) {
        next();
    }
    return res.sendStatus(403);
};
exports.auth = auth;
