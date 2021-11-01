// Ambil express dan interfacenya
import express, { Application, json, Request, Response } from "express";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(express.json());
    // this.app.use(express.urlencoded());
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("Ini routes route menggnakan ts");
    });

    this.app.route("/").post((req: Request, res: Response) => {
      console.log(req.body);
      let body = req.body;
      res.send(body);
    });
  }
}

const port: number = 8000;
const app = new App().app;
app.listen(port, () => console.log(`Berjalan di PORT ${port}`));
