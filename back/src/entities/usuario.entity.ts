import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    nome: string;

    @Column('text')
    email: string;

    @Column('text')
    senha: string;

    @Column('bool')
    ativo: boolean;
}