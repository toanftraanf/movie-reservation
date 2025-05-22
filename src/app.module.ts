import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
  imports: [
    // TypeORM
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'movie_reservation',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    // Mongoose
    MongooseModule.forRoot('mongodb://localhost:27017/movie_reservation', {
      autoCreate: true,
    }),
    // Modules
    MoviesModule,
    UsersModule,
    ReservationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
