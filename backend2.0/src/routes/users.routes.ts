import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  return response.json({ message: 'ok' });
});
export default usersRouter;
