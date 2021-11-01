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
    }
    App.prototype.routes = function () {
        this.app.route("/").get(function (req, res) {
            res.send("Ini routes route menggnakan ts");
        });
    };
    return App;
}());
var port = 8000;
var app = new App().app;
app.listen(port, function () { return console.log("Berjalan di PORT " + port); });
// const app = express();
// app.route("/").get((req, res) => {
//   res.send("Hei");
// });
// app.listen(8010);
