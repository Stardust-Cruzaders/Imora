import { getRepository, In } from 'typeorm';
import Residence from '../models/Residence';
import User from '../models/User';

import AppError from '../errors/AppError';

interface Request {
  id: string;
}
class ListFavoriteResidencesService {
  public async execute({ id }: Request): Promise<Residence[]> {
    const residenceRepository = getRepository(Residence);
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { id } });
    if (!user) {
      throw new AppError("User doesn't exist");
    }

    const favoriteResidences = await residenceRepository
      .createQueryBuilder('residences')
      .innerJoinAndSelect('users', 'users', 'users.id = residences.owner_id')
      .where({
        id: In(user.favorites),
      })
      .getRawMany();

    if (!favoriteResidences) {
      throw new AppError('Query failed :c');
    }

    return favoriteResidences;
  }
}
export default ListFavoriteResidencesService;
