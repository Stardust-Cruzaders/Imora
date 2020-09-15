import { EntityRepository, Repository } from 'typeorm';

import Residence from '../models/Residence';

@EntityRepository(Residence)
class ResidenceRepository extends Repository<Residence> {}
export default ResidenceRepository;
