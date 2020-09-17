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

usersRouter.put('/:user_id', (request, response) => {
  const { user_id } = request.params;
  const { bio, phone } = request.body;
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
