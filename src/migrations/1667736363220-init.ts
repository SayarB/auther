import { MigrationInterface, QueryRunner } from 'typeorm'

export class init1667736363220 implements MigrationInterface {
    name = 'init1667736363220'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "user" ADD "salt" varchar NOT NULL')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "user" DROP COLUMN "salt"')
    }

}
