"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Ambil express dan interfacenya
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var compression_1 = __importDefault(require("compression"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
var App = /** @class */ (function () {
    function App() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
    }
    App.prototype.plugins = function () {
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, compression_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
    };
    App.prototype.routes = function () {
        this.app.route("/").get(function (req, res) {
            res.send("Ini routes route menggnakan ts");
        });
        this.app.route("/users").post(function (req, res) {
            var body = req.body;
            res.send(body);
        });
    };
    return App;
}());
var port = 8000;
var app = new App().app;
app.listen(port, function () { return console.log("Berjalan di PORT " + port); });
