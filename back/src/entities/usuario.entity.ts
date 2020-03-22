import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Usuario extends BaseEntity{
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