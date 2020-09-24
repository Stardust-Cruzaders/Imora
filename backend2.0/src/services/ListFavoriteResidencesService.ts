import { getRepository } from 'typeorm';
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
    if (user === undefined) {
      throw new AppError("User doesn't exist");
    }
    const favoriteResidencesIds = user.favorites;

    const favoriteResidences = await residenceRepository.findByIds(
      favoriteResidencesIds,
    );
    return favoriteResidences;
  }
}
export default ListFavoriteResidencesService;
