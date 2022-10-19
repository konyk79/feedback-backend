import { MigrationInterface, QueryRunner } from "typeorm";

export class message1666188210817 implements MigrationInterface {
    name = 'message1666188210817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`messages\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(64) NOT NULL, \`email\` varchar(64) NOT NULL, \`message\` varchar(1024) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`messages\``);
    }

}
