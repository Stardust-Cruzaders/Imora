import { getRepository } from 'typeorm';
import Residence from '../models/Residence';

import AppError from '../errors/AppError';

interface Request {
  residence_id: string;
}

class GetResidenceService {
  public async execute({ residence_id }: Request): Promise<Residence> {
    const residenceRepository = getRepository(Residence);
    const residence = await residenceRepository.findOne({
      where: { id: residence_id },
    });
    if (!residence) {
      throw new AppError('Residence not found.', 404);
    }
    const residenceAndOwnerData = await residenceRepository.query(
      'SELECT residences.*, users.name, users.avatar FROM residences INNER JOIN users ON users.id = residences.owner_id WHERE residences.id = $1',
      [residence_id],
    );
    if (!residenceAndOwnerData) {
      throw new AppError('Residence and owner data not found');
    }
    return residenceAndOwnerData;
  }
}

export default GetResidenceService;
