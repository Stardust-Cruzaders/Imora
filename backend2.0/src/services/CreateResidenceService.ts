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
    const residenceRepository = getRepository(Residence);
    const userRepository = getRepository(User);

    const checkIfUserExists = await userRepository.findOne({ id: owner_id });

    if (!checkIfUserExists) {
      throw new AppError("User doesn't exist", 404);
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
    });
    await residenceRepository.save(residence);
    return residence;
  }
}
export default CreateResidenceService;
