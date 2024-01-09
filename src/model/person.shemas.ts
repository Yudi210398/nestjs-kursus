import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Animal4legsService } from 'src/animal4leg/services/animal4legs/animal4legs.service';

@Schema()
export class PersonAnimal {
  @Prop({ type: mongoose.Schema.ObjectId, ref: 'Animal4legsService' })
  binantangKesukaan: Animal4legsService;

  @Prop({ required: true })
  nama: string;

  @Prop({ required: true })
  umur: number;
}

export const PersonAnimal4LegssShema =
  SchemaFactory.createForClass(PersonAnimal);
