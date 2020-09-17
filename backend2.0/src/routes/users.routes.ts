import { Router } from 'express';

import FindUserService from '../services/FindUserService';
import CreateUserService from '../services/CreateUserService';
import UpdateUserService from '../services/UpdateUserService';

const usersRouter = Router();

usersRouter.post('/find', async (request, response) => {
  const { email } = request.body;

  const findUser = new FindUserService();

  const result = await findUser.execute({ email });

  return response.json({ isRegistered: result });
});
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

usersRouter.put('/:user_id', async (request, response) => {
  const { user_id } = request.params;
  const { bio, phone } = request.body;

  const updateUser = new UpdateUserService();

  const user = await updateUser.execute({
    id: user_id,
    bio,
    phone,
  });

  return response.json(user);
});
// usersRouter.patch('/:user_id/favorite', (request, response) => {
// const { residence_id } = request.body;
// const { user_id } = request.params;
/**
 * Pegar o id da residência que vai ser favoritada.
 * Pegar o id do usuário que está favoritando.
 * Verificar se a residência está favoritada.
 * Se não estiver, Favoritar.
 * Se estiver, Deletar dos favoritos.
 */
// });

export default usersRouter;
