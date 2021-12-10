// Ambil express dan interfacenya
import express, { Application, json, Request, Response } from "express";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { config as dotenv } from "dotenv";

//
import UserRoutes from "./routers/UserRoutes";
import AuthRouters from "./routers/AuthRouters";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
    dotenv(); // untuk membaca file .env
  }

  protected plugins(): void {
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("Ini routes route menggnakan ts");
    });

    this.app.use("/api/v1/users", UserRoutes);
    this.app.use("/api/v1/auth", AuthRouters);
  }
}

const port: number = 8000;
const app = new App().app;
app.listen(port, () => {
  console.log(`Berjalan di PORT ${port}`);
  console.log(process.env.DB_HOST);
});
