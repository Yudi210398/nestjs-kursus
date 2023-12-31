import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Binatang4Legss {
  @Prop({ required: true })
  namaBinatangs: string;

  @Prop({ required: true })
  jenisBinatang: string;
}

export const Binatang4LegssShema = SchemaFactory.createForClass(Binatang4Legss);
