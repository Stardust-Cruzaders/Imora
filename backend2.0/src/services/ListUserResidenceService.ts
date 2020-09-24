import { getRepository } from 'typeorm';
import Residence from '../models/Residence';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  owner_id: string;
}

class ListUserResidenceService {
  public async execute({ owner_id }: Request): Promise<Residence[]> {
    const residenceRepository = getRepository(Residence);
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { id: owner_id } });
    if (user === undefined) {
      throw new AppError("User doesn't exist");
    }
    const residences = await residenceRepository.find({ where: { owner_id } });

    return residences;
  }
}
export default ListUserResidenceService;
