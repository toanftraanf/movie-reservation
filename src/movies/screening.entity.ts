import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Movie } from './movie.entity';

@Entity()
export class Screening {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startTime: Date;

  @Column()
  hallNumber: number;

  @Column()
  availableSeats: number;

  @ManyToOne(() => Movie, (movie) => movie.screenings)
  @JoinColumn()
  movie: Movie;
}
