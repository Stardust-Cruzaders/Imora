import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, email, avatar, bio, is_host, phone } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    avatar,
    bio,
    is_host,
    phone,
  });

  return response.json(user);
});
export default usersRouter;
