import { Router } from 'express';

import multer from 'multer';
import FindUserService from '../services/FindUserService';
import CreateUserService from '../services/CreateUserService';
import UpdateUserService from '../services/UpdateUserService';
import FavoriteResidenceService from '../services/FavoriteResidenceService';
import DeleteUserService from '../services/DeleteUserService';
import AvatarUpload from '../middlewares/AvatarUpload';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

const Multer = multer({
  storage: multer.memoryStorage(),
  limits: {
    fieldSize: 5 * 1024 * 1024,
  },
});
usersRouter.post(
  '/upload',
  Multer.single('image'),
  AvatarUpload,
  (request, response) => {
    const data = request.body;
    if (request.file && request.file.cloudStoragePublicUrl) {
      data.imageUrl = request.file.cloudStoragePublicUrl;
    }
    return response.send(data);
  },
);
usersRouter.post('/', async (request, response) => {
  const {
    name,
    email,
    password,
    avatar,
    bio,
    is_host,
    phone,
    user_state,
    user_city,
  } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    password,
    avatar,
    bio,
    is_host,
    phone,
    user_state,
    user_city,
    favorites: [],
  });
  delete user.password;
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

usersRouter.put('/:user_id', ensureAuthenticated, async (request, response) => {
  const { user_id } = request.params;
  const {
    bio,
    phone,
    avatar,
    user_state,
    user_city,
    is_email_available,
    is_phone_available,
    is_location_available,
  } = request.body;

  const updateUser = new UpdateUserService();

  const user = await updateUser.execute({
    id: user_id,
    bio,
    phone,
    avatar,
    user_state,
    user_city,
    is_email_available,
    is_phone_available,
    is_location_available,
  });
  delete user.password;
  return response.json(user);
});

usersRouter.patch(
  '/:user_id/favorite',
  ensureAuthenticated,
  async (request, response) => {
    const { user_id } = request.params;
    const { residence_id } = request.body;
    const toggleFavorite = new FavoriteResidenceService();

    const user = await toggleFavorite.execute({ residence_id, user_id });

    return response.json(user);
  },
);

usersRouter.delete(
  '/:user_id',
  ensureAuthenticated,
  async (request, response) => {
    const { user_id } = request.params;

    const deleteUser = new DeleteUserService();

    const result = await deleteUser.execute({ id: user_id });

    return response.json(result);
  },
);

export default usersRouter;
