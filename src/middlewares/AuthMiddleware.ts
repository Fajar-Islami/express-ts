import { Request, Response, NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  let tauth = false;

  if (tauth) {
    next();
  }

  return res.sendStatus(403);
};
