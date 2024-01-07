import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Binatang4Legss {
  @Prop({ unique: true, required: true })
  namaBinatang: string;

  @Prop({ required: true })
  jenisBinatang: string;
}

export const Binatang4LegssShema = SchemaFactory.createForClass(Binatang4Legss);
