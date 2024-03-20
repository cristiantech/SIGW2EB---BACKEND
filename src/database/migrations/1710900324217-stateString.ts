import { MigrationInterface, QueryRunner } from "typeorm";

export class StateString1710900324217 implements MigrationInterface {
    name = 'StateString1710900324217'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "package" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "package" ADD "state" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "package" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "package" ADD "state" boolean`);
    }

}
