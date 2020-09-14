import { getRepository } from 'typeorm';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  description: string;
  isHost: boolean;
}
class CreateUserService {
  public async execute({
    name,
    email,
    description,
    isHost,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Email address already used');
    }

    const user = usersRepository.create({
      name,
      email,
      description,
      isHost,
    });
    await usersRepository.save(user);
    return user;
  }
}
