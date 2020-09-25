import { Router } from 'express';

import FindUserService from '../services/FindUserService';
import CreateUserService from '../services/CreateUserService';
import UpdateUserService from '../services/UpdateUserService';
import FavoriteResidenceService from '../services/FavoriteResidenceService';
import DeleteUserService from '../services/DeleteUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const {
    name,
    email,
    avatar,
    bio,
    is_host,
    phone,
    state,
    city,
  } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    avatar,
    bio,
    is_host,
    phone,
    state,
    city,
    favorites: [],
  });

  return response.json(user);
});

usersRouter.post('/find', async (request, response) => {
  const { email } = request.body;

  const findUser = new FindUserService();

  const result = await findUser.execute({ email });
  if (result === false) {
    return response.json({ user: {}, is_registered: result });
  }

  return response.json({ user: result, is_registered: true });
});

usersRouter.put('/:user_id', async (request, response) => {
  const { user_id } = request.params;
  const { bio, phone, state, city } = request.body;

  const updateUser = new UpdateUserService();

  const user = await updateUser.execute({
    id: user_id,
    bio,
    phone,
    state,
    city,
  });

  return response.json(user);
});

usersRouter.patch('/:user_id/favorite', async (request, response) => {
  const { user_id } = request.params;
  const { residence_id } = request.body;
  const toggleFavorite = new FavoriteResidenceService();

  const user = await toggleFavorite.execute({ residence_id, user_id });

  return response.json(user);
});

usersRouter.delete('/:user_id', async (request, response) => {
  const { user_id } = request.params;

  const deleteUser = new DeleteUserService();

  const result = await deleteUser.execute({ id: user_id });

  return response.json(result);
});

export default usersRouter;
