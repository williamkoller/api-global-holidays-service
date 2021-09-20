import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableContinents1632101013209 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "continents" (
        "id" SERIAL NOT NULL,
        "name" character varying NOT NULL,
        "capitalContry" character varying NOT NULL,
        "territorialExtension" integer NOT NULL,
        "localization" character varying NOT NULL,
        "language" character varying NOT NULL,
        "currency" character varying NOT NULL,
        "continent" text NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "pk_continents" PRIMARY KEY ("id"));`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "continents";`);
  }
}
