import { Response, Request } from "express";

interface IController {
  index(req: Request, res: Response): Response; // get all data
  create(req: Request, res: Response): Response; // buat data
  show(req: Request, res: Response): Response; // select 1 data
  update(req: Request, res: Response): Response; // update 1 data
  delete(req: Request, res: Response): Response; // delete 1 data
}

export default IController;
