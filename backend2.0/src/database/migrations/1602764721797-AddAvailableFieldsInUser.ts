import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddAvailableFieldsInUser1602764721797
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'is_email_available',
        type: 'boolean',
        isNullable: true,
        default: true,
      }),
    );
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'is_phone_available',
        type: 'boolean',
        isNullable: true,
        default: true,
      }),
    );
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'is_location_available',
        type: 'boolean',
        isNullable: true,
        default: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([
      queryRunner.dropColumn('users', 'is_email_available'),
      queryRunner.dropColumn('users', 'is_phone_available'),
      queryRunner.dropColumn('users', 'is_location_available'),
    ]);
  }
}
