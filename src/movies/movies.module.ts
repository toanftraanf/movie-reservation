import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { Screening } from './screening.entity';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Movie, Screening])],
  providers: [MoviesService],
  controllers: [MoviesController],
  exports: [MoviesService],
})
export class MoviesModule {}
