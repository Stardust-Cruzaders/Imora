import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateResidence1600115326166
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'residences',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'images',
            type: 'varchar',
            isNullable: false,
            isArray: true,
          },
          {
            name: 'available',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'zipcode',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'state',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'neighborhood',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'street',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'numberr',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'residence_type',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'residence_place',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'price',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'allow_smokers',
            type: 'boolean',
            default: false,
          },
          {
            name: 'allow_pets',
            type: 'boolean',
            default: false,
          },
          {
            name: 'wifi',
            type: 'boolean',
            default: false,
          },
          {
            name: 'kitchen',
            type: 'boolean',
            default: false,
          },
          {
            name: 'tv',
            type: 'boolean',
            default: false,
          },
          {
            name: 'ac',
            type: 'boolean',
            default: false,
          },
          {
            name: 'notebook_work',
            type: 'boolean',
            default: false,
          },
          {
            name: 'grill',
            type: 'boolean',
            default: false,
          },
          {
            name: 'pool',
            type: 'boolean',
            default: false,
          },
          {
            name: 'parking',
            type: 'boolean',
            default: false,
          },
          {
            name: 'num_rooms',
            type: 'integer',
            default: 1,
            isNullable: false,
          },
          {
            name: 'num_bathrooms',
            type: 'integer',
            default: 1,
            isNullable: false,
          },
          {
            name: 'current_residents',
            type: 'integer',
            default: 0,
            isNullable: false,
          },
          {
            name: 'max_residents',
            type: 'integer',
            default: 1,
            isNullable: false,
          },
          {
            name: 'owner_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'residences',
      new TableForeignKey({
        name: 'ResidenceOwner',
        columnNames: ['owner_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('residences');
  }
}
