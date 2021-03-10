import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class createEnderecos1615228485055 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'enderecos',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                //chave para ligar varios endereços a um usuario
                {
                    name: 'user_id',
                    type: 'integer',
                },
                {
                    name: 'rua',
                    type: 'text'
                },
                {
                    name: 'numero',
                    type: 'integer',
                },
                {
                    name: 'complemento',
                    type: 'text',
                },
                {
                    name: 'cep',
                    type: 'integer',
                },
                {
                    name: 'cidade',
                    type: 'text',
                },
                {
                    name: 'estado',
                    type: 'text',
                }
            ],
            //criando as foreignkeys
            foreignKeys: [
                {
                    name: 'enederecosusuario',
                    columnNames: ['user_id'],
                    referencedTableName:'users',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('enderecos')
    }

}
