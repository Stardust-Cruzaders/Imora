import { Router } from 'express';

import { getRepository } from 'typeorm';
import CreateResidenceService from '../services/CreateResidenceService';
import ListFavoriteResidencesService from '../services/ListFavoriteResidencesService';
import ListUserResidenceService from '../services/ListUserResidenceService';
import ListResidenceService from '../services/ListResidencesService';
import ChangeResidenceAvailabilityService from '../services/ChangeResidenceAvailabilityService';
import DeleteResidenceService from '../services/DeleteResidenceService';
import UpdateResidenceService from '../services/UpdateResidenceService';
import Residence from '../models/Residence';
import ToggleInterestService from '../services/ToggleInterestService';
import ListInteressedUsers from '../services/ListInteressedUsers';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const residencesRouter = Router();

residencesRouter.use(ensureAuthenticated);
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
residencesRouter.get('/search', async (request, response) => {
  const { residence_name } = request.query;
  const residenceRepository = getRepository(Residence);

  const residences = await residenceRepository
    .createQueryBuilder('residences')
    .innerJoin('users', 'users', 'residences.owner_id = users.id')
    .select(
      'residences.*, users.name, users.email, users.avatar,users.bio, users.phone, users.is_host, users.user_city, users.user_state',
    )
    .where('residences.residence_name LIKE :residence_name', {
      residence_name: `%${residence_name}%`,
    })
    .andWhere('residences.available = true')
    .getRawMany();

  return response.json(residences);
});
residencesRouter.get('/:owner_id', async (request, response) => {
  const { owner_id } = request.params;

  const listUserResidenceService = new ListUserResidenceService();

  const residences = await listUserResidenceService.execute({ owner_id });
  return response.json(residences);
});
residencesRouter.get('/:residence_id/interess/', async (request, response) => {
  const { residence_id } = request.params;

  const listInteressedUsers = new ListInteressedUsers();

  const users = await listInteressedUsers.execute(residence_id);

  return response.json(users);
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
    complement,
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
    complement,
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
  return response.json(residence);
});
residencesRouter.patch(
  '/:residence_id/available',
  async (request, response) => {
    const { residence_id } = request.params;

    const changeResidenceAvailabilityService = new ChangeResidenceAvailabilityService();

    const residence = await changeResidenceAvailabilityService.execute({
      residence_id,
    });
    return response.json(residence);
  },
);
residencesRouter.patch('/:residence_id/interess', async (request, response) => {
  const { user_id } = request.body;
  const { residence_id } = request.params;

  const toggleInterestService = new ToggleInterestService();

  const residence = await toggleInterestService.execute({
    user_id,
    residence_id,
  });
  return response.json(residence);
});
residencesRouter.delete('/:residence_id', async (request, response) => {
  const { residence_id } = request.params;

  const deleteResidence = new DeleteResidenceService();

  const result = await deleteResidence.execute({ id: residence_id });

  return response.json(result);
});
export default residencesRouter;
