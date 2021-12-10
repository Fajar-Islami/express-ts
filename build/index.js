"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Ambil express dan interfacenya
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
//
const UserRoutes_1 = __importDefault(require("./routers/UserRoutes"));
const AuthRouters_1 = __importDefault(require("./routers/AuthRouters"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
        (0, dotenv_1.config)(); // untuk membaca file .env
    }
    plugins() {
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, compression_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("Ini routes route menggnakan ts");
        });
        this.app.use("/api/v1/users", UserRoutes_1.default);
        this.app.use("/api/v1/auth", AuthRouters_1.default);
    }
}
const port = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log(`Berjalan di PORT ${port}`);
    console.log(process.env.DB_HOST);
});
