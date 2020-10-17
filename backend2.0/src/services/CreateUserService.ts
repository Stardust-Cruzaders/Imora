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
  favorites: Array<string>;
  user_state?: string;
  user_city?: string;
}
export default class CreateUserService {
  public async execute({
    name,
    email,
    avatar,
    bio,
    is_host,
    phone,
    user_state,
    user_city,
    favorites,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);
    const checkIfUserExists = await usersRepository.findOne({ email });

    if (checkIfUserExists) {
      throw new AppError('Email address already used');
    }
    if (bio === null) {
      bio = 'sem descrição disponível';
    }

    const user = usersRepository.create({
      name,
      email,
      avatar,
      bio,
      is_host,
      phone,
      user_state,
      user_city,
      favorites,
    });

    await usersRepository.save(user);
    return user;
  }
}
