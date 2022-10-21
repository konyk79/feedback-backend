import { MigrationInterface, QueryRunner } from 'typeorm';

export class MessagePG1666200920699 implements MigrationInterface {
  name = 'MessagePG1666200920699';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "messages" ("id" SERIAL NOT NULL, "name" character varying(64) NOT NULL, "email" character varying(64) NOT NULL, "message" character varying(1024) NOT NULL, CONSTRAINT "PK_18325f38ae6de43878487eff986" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "messages"`);
  }
}
