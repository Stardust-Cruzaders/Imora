/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRepository } from 'typeorm';
import Residence from '../models/Residence';

// import AppError from '../errors/AppError';

interface Request {
  price?: any | undefined;
  residence_place?: any | undefined;
  residence_type?: any | undefined;
  allow_pets?: any | undefined;
  allow_smokers?: any | undefined;
  wifi?: any | undefined;
  kitchen?: any | undefined;
  tv?: any | undefined;
  ac?: any | undefined;
  notebook_work?: any | undefined;
  pool?: any | undefined;
  parking?: any | undefined;
  grill?: any | undefined;
  city?: any | undefined;
}
class ListResidencesService {
  public async execute({
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
  }: Request): Promise<Residence[]> {
    const residenceRepository = getRepository(Residence);

    const residences = await residenceRepository.query(
      'SELECT residences.*, users.name, users.avatar FROM residences  INNER JOIN users ON residences.owner_id = users.id WHERE (residences.available = true) AND ((CAST($1 AS FLOAT)) IS NULL OR (CAST(price as FLOAT)) <= (CAST($1 AS FLOAT))) AND CAST($2 AS TEXT)  IS NULL OR residences.residence_place = $2 AND CAST($3 AS TEXT) IS NULL OR residences.residence_type  = $3 AND (CAST($4 AS BOOLEAN) IS NULL OR CAST(residences.allow_pets AS BOOLEAN) = CAST($4 AS BOOLEAN)) AND (CAST($5 AS BOOLEAN) IS NULL OR CAST(residences.allow_smokers AS BOOLEAN) = CAST($5 AS BOOLEAN)) AND (CAST($6 AS BOOLEAN) IS NULL OR CAST(residences.wifi AS BOOLEAN) = CAST($6 AS BOOLEAN)) AND (CAST($7 AS BOOLEAN) IS NULL OR CAST(residences.kitchen AS BOOLEAN) = CAST($7 AS BOOLEAN)) AND (CAST($8 AS BOOLEAN) IS NULL OR CAST(residences.tv AS BOOLEAN) = CAST($8 AS BOOLEAN)) AND (CAST($9 AS BOOLEAN) IS NULL OR CAST(residences.ac AS BOOLEAN) = CAST($9 AS BOOLEAN)) AND (CAST($10 AS BOOLEAN) IS NULL OR CAST(residences.notebook_work AS BOOLEAN) = CAST($10 AS BOOLEAN)) AND (CAST($11 AS BOOLEAN) IS NULL OR CAST(residences.grill AS BOOLEAN) = CAST($11 AS BOOLEAN)) AND (CAST($12 AS BOOLEAN) IS NULL OR CAST(residences.pool AS BOOLEAN) = CAST($12 AS BOOLEAN)) AND (CAST($13 AS BOOLEAN) IS NULL OR CAST(residences.parking AS BOOLEAN) = CAST($13 AS BOOLEAN)) AND CAST($14 AS TEXT) IS NULL OR residences.city = $14 ORDER BY residence_name',
      [
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
      ],
    );
    return residences;
  }
}
export default ListResidencesService;
