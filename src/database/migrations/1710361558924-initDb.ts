import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDb1710361558924 implements MigrationInterface {
    name = 'InitDb1710361558924'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "title" character varying(250) NOT NULL, "author" character varying(100) NOT NULL, "year" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "usersIdUser" integer, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id_user" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "lastname" character varying(100) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying(150) NOT NULL, "role" character varying(50) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_fbb07fa6fbd1d74bee9782fb945" PRIMARY KEY ("id_user"))`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_5e84001a7e767dc63f10ccdba76" FOREIGN KEY ("usersIdUser") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_5e84001a7e767dc63f10ccdba76"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "books"`);
    }

}
