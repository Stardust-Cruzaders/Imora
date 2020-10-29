import { getRepository, In } from 'typeorm';
import Residence from '../models/Residence';
import User from '../models/User';

import AppError from '../errors/AppError';

interface Request {
  id: string;
}
class ListFavoriteResidencesService {
  public async execute({ id }: Request): Promise<Residence[] | string[]> {
    const residenceRepository = getRepository(Residence);
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { id } });
    if (!user) {
      throw new AppError("User doesn't exist");
    }
    if (user.favorites.length < 1) {
      return user.favorites;
    }
    const favoriteResidences = await residenceRepository
      .createQueryBuilder('residences')
      .innerJoin('users', 'users', 'residences.owner_id = users.id')
      .select(
        'residences.*, users.name, users.email, users.avatar,users.bio, users.phone, users.is_host, users.user_city, users.user_state',
      )
      .where({
        id: In(user.favorites),
      })
      .andWhere('residences.available = true')
      .getRawMany();

    if (!favoriteResidences) {
      throw new AppError('Query failed :c');
    }

    return favoriteResidences;
  }
}
export default ListFavoriteResidencesService;
