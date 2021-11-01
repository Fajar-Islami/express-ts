import { Request, Response } from "express";
import IController from "./ControllerInterface";

class UserController implements IController {
  index(req: Request, res: Response): Response {
    return res.send("get users endppoint");
  }

  create(req: Request, res: Response): Response {
    return res.send(req.body);
  }
  show(req: Request, res: Response): Response {
    throw new Error("erro");
  }
  update(req: Request, res: Response): Response {
    throw new Error("erro");
  }
  delete(req: Request, res: Response): Response {
    throw new Error("erro");
  }
}

export default new UserController();
