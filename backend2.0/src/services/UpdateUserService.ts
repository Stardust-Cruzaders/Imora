import { getRepository } from 'typeorm';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  id: string;
  bio: string;
  phone: string;
  user_state: string;
  user_city: string;
  is_email_available: boolean;
  is_phone_available: boolean;
  is_location_available: boolean;
}

export default class UpdateUserService {
  public async execute({
    id,
    bio,
    phone,
    user_state,
    user_city,
    is_email_available,
    is_phone_available,
    is_location_available,
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
    user.is_email_available = is_email_available;
    user.is_phone_available = is_phone_available;
    user.is_location_available = is_location_available;

    const newUser = await usersRepository.save(user);
    return newUser;
  }
}
