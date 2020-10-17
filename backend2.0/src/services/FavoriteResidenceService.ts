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
    const newUser = await usersRepository.findOne({ id: user_id });
    if (newUser === undefined) {
      throw new AppError("User doesn't exist", 404);
    }
    return newUser;
  }
}
