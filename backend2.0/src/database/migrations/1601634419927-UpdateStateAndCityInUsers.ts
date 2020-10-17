import { MigrationInterface, QueryRunner } from 'typeorm';

export default class UpdateStateAndCityInUsers1601634419927
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('users', 'state', 'user_state');
    await queryRunner.renameColumn('users', 'city', 'user_city');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('users', 'user_state', 'state');
    // await queryRunner.renameColumn('users', 'user_city', 'city');
  }
}
