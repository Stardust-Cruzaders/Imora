import { getCustomRepository, getRepository } from 'typeorm';
import User from '../models/User';
import AppError from '../errors/AppError';
import ResidenceRepository from '../repositories/ResidenceRepository';

interface Request {
  user_id: string;
  residence_id: string;
}
export default class FavoriteResidenceService {
  public async execute({ user_id, residence_id }: Request): Promise<User> {
    /**
     * Pegar o id da residência que vai ser favoritada.
     * Pegar o id do usuário que está favoritando.
     * Verificar se O usuário existe
     * Vericar se a residência existe
     * Verificar se a residência está favoritada.
     * Se não estiver, Favoritar.
     * Se estiver, Deletar dos favoritos.
     */
    const usersRepository = getRepository(User);
    const residenceRepository = getCustomRepository(ResidenceRepository);

    const queryUpdateFavoriteArray =
      'UPDATE users SET favorites = array_append(favorites, $1) WHERE id = $2';
    const queryDeleteFavoriteArray =
      'UPDATE users SET favorites = array_remove(favorites, $1) WHERE id = $2';

    const user = await usersRepository.findOne({ id: user_id });
    const residence = await residenceRepository.findOne({
      id: residence_id,
    });
    if (user === undefined) {
      throw new AppError("User doesn't exist", 404);
    }
    if (residence === undefined) {
      throw new AppError("This residence doesn't exist");
    }
    console.log(residence_id, user.favorites.includes(residence_id));
    if (user.favorites.includes(residence_id)) {
      await usersRepository.query(queryDeleteFavoriteArray, [
        residence_id,
        user_id,
      ]);
    } else {
      await usersRepository.query(queryUpdateFavoriteArray, [
        residence_id,
        user_id,
      ]);
    }

    return user;
  }
}
