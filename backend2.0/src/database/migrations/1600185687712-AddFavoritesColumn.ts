import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddFavoritesColumn1600185687712
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'favorites',
        type: 'varchar',
        isArray: true,
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'favorites');
  }
}
