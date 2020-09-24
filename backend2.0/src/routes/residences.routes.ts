import { Router } from 'express';

import CreateResidenceService from '../services/CreateResidenceService';
import ListFavoriteResidencesService from '../services/ListFavoriteResidencesService';
import ListUserResidenceService from '../services/ListUserResidenceService';
import ListResidenceService from '../services/ListResidencesService';
import ChangeResidenceAvailabilityService from '../services/ChangeResidenceAvailabilityService';
import DeleteResidenceService from '../services/DeleteResidenceService';
import UpdateResidenceService from '../services/UpdateResidenceService';

const residencesRouter = Router();

residencesRouter.get('/', async (request, response) => {
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

  const listResidenceService = new ListResidenceService();

  const residences = await listResidenceService.execute({
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
residencesRouter.put('/:residence_id', async (request, response) => {
  const { residence_id } = request.params;
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

  const updateResidenceService = new UpdateResidenceService();

  const residence = await updateResidenceService.execute({
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
residencesRouter.delete('/:residence_id', async (request, response) => {
  const { residence_id } = request.params;

  const deleteResidence = new DeleteResidenceService();

  const result = await deleteResidence.execute({ id: residence_id });

  return response.json(result);
});
export default residencesRouter;
