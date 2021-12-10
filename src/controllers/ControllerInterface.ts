import { Response, Request } from "express";

interface IController {
  index(req: Request, res: Response): Response | Promise<Response>; // get all data
  create(req: Request, res: Response): Response | Promise<Response>; // buat data
  show(req: Request, res: Response): Response | Promise<Response>; // select 1 data
  update(req: Request, res: Response): Response | Promise<Response>; // update 1 data
  delete(req: Request, res: Response): Response | Promise<Response>; // delete 1 data
}

export default IController;
