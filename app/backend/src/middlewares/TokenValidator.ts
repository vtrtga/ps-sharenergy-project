import { NextFunction, Response, Request } from 'express';
import * as Jwt from 'jsonwebtoken';

require('dotenv');

const secret = process.env.JWT_SECRET || 'jwt_secret';

const tokenValidator = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const verif: string | Jwt.JwtPayload = Jwt.verify(authorization, secret);
  } catch (e) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  
  next();
};

export default tokenValidator;