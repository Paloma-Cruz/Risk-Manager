import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Projeto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  nome: string;

  @Column('text')
  descricao: string;

  @Column('float')
  orcamento: number;

  @Column('date')
  data_inicio: Date;

  @Column('date')
  data_previsao: Date;

  @Column('date')
  data_entrega: Date;

  @Column('bool')
  ativo: boolean;
}