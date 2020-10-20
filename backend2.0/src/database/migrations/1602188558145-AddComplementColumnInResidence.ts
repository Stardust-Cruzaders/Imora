import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddComplementColumnInResidence1602188558145
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'residences',
      new TableColumn({
        name: 'complement',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('residences', 'complement');
  }
}
