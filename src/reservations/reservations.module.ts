import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Reservation, ReservationSchema } from './schemas/reservation.schema';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { MoviesModule } from '../movies/movies.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Reservation.name, schema: ReservationSchema },
    ]),
    MoviesModule,
    UsersModule,
  ],
  providers: [ReservationsService],
  controllers: [ReservationsController],
})
export class ReservationsModule {}
