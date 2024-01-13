import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Animals4Legss } from './AnimalData';

@Schema()
export class PersonAnimal {
  @Prop({ type: mongoose.Schema.ObjectId, ref: 'Animals4Legss' })
  binantangKesukaan: Animals4Legss;

  @Prop({ required: true })
  nama: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  umur: number;
}

export const PersonAnimal4LegssShema =
  SchemaFactory.createForClass(PersonAnimal);
