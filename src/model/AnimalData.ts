import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Animals4Legss {
  @Prop({ required: true })
  namaBinatangs: string;

  @Prop({ required: true })
  jenisBinatang: string;
}

export const Animal4LegssShema = SchemaFactory.createForClass(Animals4Legss);
