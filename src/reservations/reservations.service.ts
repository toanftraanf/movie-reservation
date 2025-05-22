import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservation } from './schemas/reservation.schema';
import { MoviesService } from 'src/movies/movies.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectModel(Reservation.name) private reservationModel: Model<Reservation>,
    private moviesService: MoviesService,
    private usersService: UsersService,
  ) {}

  async create(createReservationDto: any) {
    const reservation = new this.reservationModel(createReservationDto);
    return reservation.save();
  }

  async findAll() {
    return this.reservationModel.find().exec();
  }

  async findOne(id: string) {
    return this.reservationModel.findById(id).exec();
  }
}
