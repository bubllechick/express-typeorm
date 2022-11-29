import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669735304214 implements MigrationInterface {
    name = 'default1669735304214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`subjects\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`subjects\` ADD \`name\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`videos\` DROP FOREIGN KEY \`FK_64bb2d8544299bbde670698ac37\``);
        await queryRunner.query(`ALTER TABLE \`videos\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`videos\` ADD \`title\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`videos\` DROP COLUMN \`url\``);
        await queryRunner.query(`ALTER TABLE \`videos\` ADD \`url\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`videos\` CHANGE \`room_id\` \`room_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`rooms\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`rooms\` ADD \`name\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`videos\` ADD CONSTRAINT \`FK_64bb2d8544299bbde670698ac37\` FOREIGN KEY (\`room_id\`) REFERENCES \`rooms\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`videos\` DROP FOREIGN KEY \`FK_64bb2d8544299bbde670698ac37\``);
        await queryRunner.query(`ALTER TABLE \`rooms\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`rooms\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`videos\` CHANGE \`room_id\` \`room_id\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`videos\` DROP COLUMN \`url\``);
        await queryRunner.query(`ALTER TABLE \`videos\` ADD \`url\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`videos\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`videos\` ADD \`title\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`videos\` ADD CONSTRAINT \`FK_64bb2d8544299bbde670698ac37\` FOREIGN KEY (\`room_id\`) REFERENCES \`rooms\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`subjects\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`subjects\` ADD \`name\` varchar(255) NOT NULL`);
    }

}
