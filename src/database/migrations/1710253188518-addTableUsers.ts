import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTableUsers1710253188518 implements MigrationInterface {
    name = 'AddTableUsers1710253188518'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id_cliente" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "lastname" character varying(100) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying(150) NOT NULL, "role" character varying(50) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_2f27ab796b0ae3d6cf6317ae193" PRIMARY KEY ("id_cliente"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
