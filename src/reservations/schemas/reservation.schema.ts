import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Reservation extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  movieId: number;

  @Prop({ required: true })
  screeningId: number;

  @Prop({ required: true })
  seatNumber: number;

  @Prop({ required: true })
  reservationDate: Date;

  @Prop({ required: true, enum: ['PENDING', 'CONFIRMED', 'CANCELLED'] })
  status: string;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
