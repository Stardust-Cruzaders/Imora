import { getRepository } from 'typeorm';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  bio?: string;
  avatar: string;
  is_host: boolean;
  phone?: string;
}
export default class CreateUserService {
  public async execute({
    name,
    email,
    avatar,
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
    if (bio === null) {
      bio = 'sem descrição disponível';
    }
    const user = await usersRepository.create({
      name,
      email,
      avatar,
      bio,
      is_host,
      phone,
    });

    await usersRepository.save(user);
    return user;
  }
}
