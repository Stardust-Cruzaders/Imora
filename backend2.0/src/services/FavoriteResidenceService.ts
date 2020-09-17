import { getRepository } from 'typeorm';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  user_id: string;
  residence_id: string;
}
export default class FavoriteResidenceService {
  public async execute({ user_id, residence_id }: Request): Promise<User> {}
}
