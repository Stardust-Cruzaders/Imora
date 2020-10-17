import { getRepository } from 'typeorm';
import Residence from '../models/Residence';
import User from '../models/User';

import AppError from '../errors/AppError';

interface Request {
  user_id: string;
  residence_id: string;
}
class ToggleInterestService {
  public async execute({ user_id, residence_id }: Request): Promise<Residence> {
    const residenceRepository = getRepository(Residence);
    const userRepository = getRepository(User);

    const queryUpdateInteressArray =
      'UPDATE residences SET interessed_users = array_append(interessed_users, $1) WHERE id = $2';
    const queryDeleteInteressArray =
      'UPDATE residences SET interessed_users = array_remove(interessed_users, $1) WHERE id = $2';

    const user = await userRepository.findOne({ id: user_id });
    const residence = await residenceRepository.findOne({ id: residence_id });
    if (!user) {
      throw new AppError("User doesn't exist", 404);
    }
    if (!residence) {
      throw new AppError("Residence doesn't exist", 404);
    }

    if (residence.interessed_users.includes(user_id)) {
      await residenceRepository.query(queryDeleteInteressArray, [
        user_id,
        residence_id,
      ]);
    } else {
      await residenceRepository.query(queryUpdateInteressArray, [
        user_id,
        residence_id,
      ]);
    }

    const newResidence = await residenceRepository.findOne({
      id: residence_id,
    });
    if (!newResidence) {
      throw new AppError("Residence doesn't exist", 404);
    }
    return newResidence;
  }
}
export default ToggleInterestService;
