import { getCustomRepository, getRepository } from 'typeorm';

import Residence from '../models/Residence';
import User from '../models/User';
import ResidenceRepository from '../repositories/ResidenceRepository';

import AppError from '../errors/AppError';

interface Request {
  residence_name: string;
  description: string;
  images: string;
  available: boolean;
  zipcode: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  numberr: string;
  complement?: string;
  residence_type: string;
  residence_place: string;
  price: number;
  allow_smokers: boolean;
  allow_pets: boolean;
  wifi: boolean;
  kitchen: boolean;
  tv: boolean;
  ac: boolean;
  notebook_work: boolean;
  grill: boolean;
  pool: boolean;
  parking: boolean;
  num_rooms: number;
  num_bathrooms: number;
  current_residents: number;
  max_residents: number;
  owner_id: string;
}

class CreateResidenceService {
  private residenceRepository: ResidenceRepository;

  public async execute({
    residence_name,
    description,
    images,
    available,
    zipcode,
    state,
    city,
    neighborhood,
    street,
    numberr,
    complement,
    residence_type,
    residence_place,
    price,
    allow_smokers,
    allow_pets,
    wifi,
    kitchen,
    tv,
    ac,
    notebook_work,
    grill,
    pool,
    parking,
    num_rooms,
    num_bathrooms,
    current_residents,
    max_residents,
    owner_id,
  }: Request): Promise<Residence> {
    const residenceRepository = getCustomRepository(ResidenceRepository);
    const userRepository = getRepository(User);

    const checkIfUserExists = await userRepository.findOne({ id: owner_id });
    const checkAddress = await residenceRepository.findOne({ street, numberr });
    if (!checkIfUserExists) {
      throw new AppError("User doesn't exist", 404);
    }
    if (checkAddress) {
      throw new AppError('This address is already being used', 400);
    }
    if (images.length < 1) {
      throw new AppError(
        'You need a minimum of one image in order to post a residence',
        400,
      );
    }
    const residence = residenceRepository.create({
      residence_name,
      description,
      images,
      available,
      zipcode,
      state,
      city,
      neighborhood,
      street,
      numberr,
      complement,
      residence_type,
      residence_place,
      price,
      allow_smokers,
      allow_pets,
      wifi,
      kitchen,
      tv,
      ac,
      notebook_work,
      grill,
      pool,
      parking,
      num_rooms,
      num_bathrooms,
      current_residents,
      max_residents,
      interessed_users: [],
      owner_id,
    });
    await residenceRepository.save(residence);
    checkIfUserExists.is_host = true;
    await userRepository.save(checkIfUserExists);
    return residence;
  }
}
export default CreateResidenceService;
