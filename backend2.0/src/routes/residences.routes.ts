import { Router } from 'express';

import CreateResidenceService from '../services/CreateResidenceService';

const residencesRouter = Router();

residencesRouter.get('/', async (request, response) => {
  return response.json({ message: 'ok' });
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
export default residencesRouter;
