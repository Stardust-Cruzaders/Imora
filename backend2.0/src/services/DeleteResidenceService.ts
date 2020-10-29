import { DeleteResult, getRepository } from 'typeorm';
import Residence from '../models/Residence';
import AppError from '../errors/AppError';

interface Request {
  id: string;
}

export default class DeleteResidenceService {
  public async execute({ id }: Request): Promise<DeleteResult> {
    const residenceRepository = getRepository(Residence);

    const checkIfExists = await residenceRepository.findOne(id);
    if (checkIfExists === undefined) {
      throw new AppError("Residence doesn't exist", 404);
    }

    const deleteResult = await residenceRepository.delete({ id });
    return deleteResult;
  }
}
