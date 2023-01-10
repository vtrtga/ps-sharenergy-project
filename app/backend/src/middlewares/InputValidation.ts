import { NextFunction, Request, Response } from "express";
import newCustomerSchema from "./JoiSchemas/newCustomerSchema";

const newCustomerValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = newCustomerSchema.validate(req.body);

  if(error) {
    return res.status(401).json({ message: error.details[0].message})
  }

  next();
}

export default newCustomerValidation;