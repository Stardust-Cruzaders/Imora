import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Residence from '../models/Residence';

interface Request {
  residence_id: string;
}

class ChangeResidenceAvailabilityService {
  public async execute({ residence_id }: Request): Promise<Residence> {
    const residenceRepository = getRepository(Residence);

    const residence = await residenceRepository.findOne({
      where: { id: residence_id },
    });
    if (!residence) {
      throw new AppError("Residence doesn't exist");
    }
    if (residence.available) {
      residence.available = false;
    } else {
      residence.available = true;
    }
    const newResidence = await residenceRepository.save(residence);
    return newResidence;
  }
}
export default ChangeResidenceAvailabilityService;
