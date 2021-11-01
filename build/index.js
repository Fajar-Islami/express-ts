"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Ambil express dan interfacenya
var express_1 = __importDefault(require("express"));
var App = /** @class */ (function () {
    function App() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
    }
    App.prototype.plugins = function () {
        this.app.use(express_1.default.json());
        // this.app.use(express.urlencoded());
    };
    App.prototype.routes = function () {
        this.app.route("/").get(function (req, res) {
            res.send("Ini routes route menggnakan ts");
        });
        this.app.route("/").post(function (req, res) {
            console.log(req.body);
            var body = req.body;
            res.send(body);
        });
    };
    return App;
}());
var port = 8000;
var app = new App().app;
app.listen(port, function () { return console.log("Berjalan di PORT " + port); });
