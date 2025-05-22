import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';
import { Screening } from './screening.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
    @InjectRepository(Screening)
    private screeningRepository: Repository<Screening>,
  ) {}

  async create(createMovieDto: any) {
    const movie = this.movieRepository.create(createMovieDto);
    return this.movieRepository.save(movie);
  }

  async findAll() {
    return this.movieRepository.find();
  }

  async findOne(id: number) {
    return this.movieRepository.findOne({ where: { id } });
  }
}
