import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('enderecos')
export default class User{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    rua: string;

    @Column()
    numero: number;

    @Column()
    complemento: string;

    @Column()
    cep: number;

    @Column()
    cidade: string;

    @Column()
    estado: string;
}