import {MigrationInterface, QueryRunner, Table} from "typeorm";

// migration para facilitar a criação e manutenção do banco de dados
export class createUsuarios1615066668354 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'users',
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'nome',
                    type: 'text'
                },
                {
                    name: 'telefone',
                    type: 'integer',
                },
                {
                    name: 'email',
                    type: 'text',
                },
                {
                    name: 'idade',
                    type: 'integer',
                },
                {
                    name: 'peso',
                    type: 'integer',
                },
                {
                    name: 'etnia',
                    type: 'enum',
                    enum: ['branco', 'negro', 'pardo', 'indígena', 'outro'],
                    //enumName: 'statusEnum',
                    //default: '"outro"'
                }
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
