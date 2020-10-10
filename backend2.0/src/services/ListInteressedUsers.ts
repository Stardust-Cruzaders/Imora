import { getRepository } from 'typeorm';
import Residence from '../models/Residence';
import User from '../models/User';

import AppError from '../errors/AppError';

class ListInteressedUsers {
  public async execute(residence_id: string): Promise<User[]> {
    const residenceRepository = getRepository(Residence);
    const userRepository = getRepository(User);

    const residence = await residenceRepository.findOne({
      where: { id: residence_id },
    });
    if (!residence) {
      throw new AppError("Residence doesn't exist", 404);
    }

    const users = await userRepository.findByIds(residence.interessed_users);

    return users;
  }
}
export default ListInteressedUsers;
