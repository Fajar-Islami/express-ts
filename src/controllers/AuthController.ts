import { Request, Response } from "express";

const db = require("../db/models"); // gk semua harus pke ts

class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;
    await db.user.create({
      username,
      password,
    });

    return res.status(201).send("Registrasi sukses");
  };

  login(req: Request, res: Response): Response {
    return res.send("");
  }
}

export default new AuthController();
