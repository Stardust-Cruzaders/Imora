import { Router } from 'express';
import { getRepository, LessThanOrEqual, Not } from 'typeorm';
import Residence from '../models/Residence';

import CreateResidenceService from '../services/CreateResidenceService';
import ListFavoriteResidencesService from '../services/ListFavoriteResidencesService';
import ListUserResidenceService from '../services/ListUserResidenceService';
import ChangeResidenceAvailabilityService from '../services/ChangeResidenceAvailabilityService';

const residencesRouter = Router();

residencesRouter.get('/', async (request, response) => {
  const residenceRepository = getRepository(Residence);
  const {
    price,
    residence_place,
    residence_type,
    allow_pets,
    allow_smokers,
    wifi,
    kitchen,
    tv,
    ac,
    notebook_work,
    pool,
    parking,
    grill,
    city,
  } = request.query;
  const residences = await residenceRepository.find({
    where: {
      available: true,
      price: Not(LessThanOrEqual(Number(price) - 1)),
      residence_place,
      residence_type,
      allow_pets,
      allow_smokers,
      wifi,
      kitchen,
      tv,
      ac,
      notebook_work,
      pool,
      parking,
      grill,
      city,
    },
  });
  return response.json(residences);
});
residencesRouter.get('/:owner_id', async (request, response) => {
  const { owner_id } = request.params;

  const listUserResidenceService = new ListUserResidenceService();

  const residences = await listUserResidenceService.execute({ owner_id });
  return response.json(residences);
});
residencesRouter.get('/:owner_id/favorites', async (request, response) => {
  const { owner_id } = request.params;

  const listFavoriteResidencesService = new ListFavoriteResidencesService();

  const residences = await listFavoriteResidencesService.execute({
    id: owner_id,
  });
  return response.json(residences);
});
residencesRouter.post('/:owner_id', async (request, response) => {
  const { owner_id } = request.params;
  const {
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
    allow_pets,
    allow_smokers,
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
  } = request.body;

  const createResidence = new CreateResidenceService();

  const residence = await createResidence.execute({
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
  return response.json(residence);
});
residencesRouter.patch(
  '/:residence_id/available',
  async (request, response) => {
    const { available } = request.body;
    const { residence_id } = request.params;

    const changeResidenceAvailabilityService = new ChangeResidenceAvailabilityService();

    const residence = await changeResidenceAvailabilityService.execute({
      residence_id,
      available,
    });
    return response.json(residence);
  },
);
export default residencesRouter;
