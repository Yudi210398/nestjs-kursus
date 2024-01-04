import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddlewareAuth implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const { auth } = req.headers;
    console.log(auth);

    if (auth) next();
    else res.status(401).send({ error: 'auth gagal' });
  }
}
