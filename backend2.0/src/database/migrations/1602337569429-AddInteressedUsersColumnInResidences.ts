import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddInteressedUsersColumnInResidences1602337569429
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'residences',
      new TableColumn({
        name: 'interessed_users',
        type: 'varchar',
        isArray: true,
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('residences', 'interessed_users');
  }
}
