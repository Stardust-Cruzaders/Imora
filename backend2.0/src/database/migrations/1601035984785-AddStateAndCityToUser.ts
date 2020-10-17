import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddStateAndCityToUser1601035984785
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'state',
        type: 'varchar',
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'city',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'state');
    await queryRunner.dropColumn('users', 'city');
  }
}
