import { getRepository } from 'typeorm';
import Residence from '../models/Residence';

import AppError from '../errors/AppError';

interface Request {
  residence_id: string;
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
}

class UpdateResidenceService {
  public async execute({
    residence_id,
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
  }: Request): Promise<Residence> {
    const residenceRepository = getRepository(Residence);

    const residence = await residenceRepository.findOne({
      where: { id: residence_id },
    });

    if (!residence) {
      throw new AppError("Residence doesn't exist");
    }

    const updatedResidence = residenceRepository.create({
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
    });
    await residenceRepository.update(residence.id, updatedResidence);
    return updatedResidence;
  }
}
export default UpdateResidenceService;
