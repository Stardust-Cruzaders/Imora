import { Router } from 'express';

const residencesRouter = Router();

residencesRouter.get('/', async (request, response) => {
  return response.json({ message: 'ok' });
});
export default residencesRouter;
