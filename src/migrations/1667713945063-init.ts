import { MigrationInterface, QueryRunner } from "typeorm";

export class init1667713945063 implements MigrationInterface {
    name = 'init1667713945063'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE "user_id_seq"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" INT DEFAULT nextval('"user_id_seq"') NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "age" int8 NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP SEQUENCE "user_id_seq"`);
    }

}
