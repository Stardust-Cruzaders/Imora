import { getRepository } from 'typeorm';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  bio: string;
  is_host: boolean;
  phone: string;
}
export default class CreateUserService {
  public async execute({
    name,
    email,
    bio,
    is_host,
    phone,
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
      bio,
      is_host,
      phone,
    });
    await usersRepository.save(user);
    return user;
  }
}
