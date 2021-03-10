import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import { IsEmail } from 'class-validator';
import {Etnia} from './enum';

@Entity('users')
export default class User{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    telefone: number;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    idade: number;

    @Column()
    peso: number;

    @Column({
        type: "enum",
        enum: Etnia,
        default: Etnia.outro,
    })
    public etnia!: Etnia;
}