import { Request, Response } from "express";
import IController from "./ControllerInterface";
const db = require("../db/models");

class TodoController implements IController {
  index = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.app.locals.credential;

    const todos = await db.todo.findAll({
      where: {
        user_id: id,
      },
      attributes: ["id", "description"], // hanya memunculkan field ini
    });
    return res.send({
      data: todos,
    });
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.app.locals.credential;
    const { description } = req.body;

    const todo = await db.todo.create({
      user_id: id,
      description,
    });

    return res.send({
      message: "todo created",
      data: todo,
    });
  };

  show = async (req: Request, res: Response): Promise<Response> => {
    const { id: user_id } = req.app.locals.credential;
    const { id } = req.params;

    const todo = await db.todo.findOne({
      where: { id, user_id },
    });

    return res.send({
      data: todo,
    });
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const { id: user_id } = req.app.locals.credential;
    const { id } = req.params;
    const { description } = req.body;

    await db.todo.update(
      {
        description,
      },
      {
        where: { id, user_id },
      }
    );

    return res.send({
      data: "",
      message: "todo updated",
    });
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const { id: user_id } = req.app.locals.credential;
    const { id } = req.params;

    await db.todo.destroy({
      where: { id, user_id },
    });

    return res.send({
      data: "",
      message: "todo deleted",
    });
  };
}

export default new TodoController();
