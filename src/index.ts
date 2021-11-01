// Ambil express dan interfacenya
import express, { Application, Request, Response } from "express";

class App {
  public app: Application;

  constructor() {
    this.app = express();
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("Ini routes route menggnakan ts");
    });
  }
}

const port: number = 8000;
const app = new App().app;
app.listen(port, () => console.log(`Berjalan di PORT ${port}`));

// const app = express();

// app.route("/").get((req, res) => {
//   res.send("Hei");
// });

// app.listen(8010);
