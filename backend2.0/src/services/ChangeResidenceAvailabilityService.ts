import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Residence from '../models/Residence';

interface Request {
  residence_id: string;
  available: boolean;
}

class ChangeResidenceAvailabilityService {
  public async execute({
    residence_id,
    available,
  }: Request): Promise<Residence> {
    const residenceRepository = getRepository(Residence);

    const residence = await residenceRepository.findOne({
      where: { id: residence_id },
    });
    if (!residence) {
      throw new AppError("Residence doesn't exist");
    }
    residence.available = available;
    const newResidence = await residenceRepository.save(residence);
    return newResidence;
  }
}
export default ChangeResidenceAvailabilityService;
