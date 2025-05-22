import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Screening } from './screening.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  duration: number;

  @OneToMany(() => Screening, (screening) => screening.movie)
  screenings: Screening[];
}
