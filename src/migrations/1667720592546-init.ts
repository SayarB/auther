import { MigrationInterface, QueryRunner } from 'typeorm'

export class init1667720592546 implements MigrationInterface {
    name = 'init1667720592546'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE "user" ("id" UUID DEFAULT gen_random_uuid() NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "age" int8 NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE "user"')
    }

}
