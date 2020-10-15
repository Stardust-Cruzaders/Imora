import { response, Router } from 'express';

import residencesRouter from './residences.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/residences', residencesRouter);
routes.use('/users', usersRouter);

export default routes;
