import { getRepository } from 'typeorm';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  id: string;
  bio: string;
  phone: string;
}

export default class UpdateUserService {
  public async execute({ id, bio, phone }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(id);

    if (!user) {
      throw new AppError("User doesn't exist", 404);
    }

    if (bio === null) {
      bio = 'sem descrição disponível';
    }
    user.bio = bio;
    user.phone = phone;
    console.log(user.bio, bio);
    const newUser = await usersRepository.save(user);
    return newUser;
  }
}
