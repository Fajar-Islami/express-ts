import { Request, Response } from "express";
import IController from "./ControllerInterface";

let data: any[] = [
  { id: 1, name: "Adi 1" },
  { id: 2, name: "Adi 2" },
  { id: 3, name: "Adi 3" },
  { id: 4, name: "Adi 4" },
];
class UserController implements IController {
  index(req: Request, res: Response): Response {
    return res.send(data);
  }

  create(req: Request, res: Response): Response {
    const { id, name } = req.body;
    data.push({
      id,
      name,
    });
    return res.send("sukses tambah user");
  }
  show(req: Request, res: Response): Response {
    const { id } = req.params;

    let person = data.find((item) => item.id == id);
    return res.send(person);
  }
  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;

    let person = data.find((item) => item.id == id);
    person.name = name;

    return res.send("update sukses");
  }
  delete(req: Request, res: Response): Response {
    const { id } = req.params;
    let people = data.filter((item) => item.id != id);
    return res.send(people);
  }
}

export default new UserController();
