import { getRepository } from 'typeorm';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  id: string;
  bio: string;
  phone: string;
  user_state: string;
  user_city: string;
}

export default class UpdateUserService {
  public async execute({
    id,
    bio,
    phone,
    user_state,
    user_city,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(id);

    if (user === undefined) {
      throw new AppError("user doesn't exist", 401);
    }

    if (bio === null) {
      bio = 'sem descrição disponível';
    }

    user.bio = bio;
    user.phone = phone;
    user.user_state = user_state;
    user.user_city = user_city;

    const newUser = await usersRepository.save(user);
    return newUser;
  }
}
