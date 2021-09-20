import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableContinents1632101013209 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "continents" (
        "id" SERIAL NOT NULL,
        "name" character varying NOT NULL,
        "territorialExtension" integer NOT NULL,
        "totalContries" integer NOT NULL,
        "population" integer NOT NULL,
        "demographicDensity" integer NOT NULL,
        "urbanPopulation" integer NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "pk_continents" PRIMARY KEY ("id"));`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "continents";`);
  }
}
