import { Module } from '@nestjs/common';
import { Animal4legsController } from './controller/animal4legs/animal4legs.controller';
import { Animal4legsService } from './services/animal4legs/animal4legs.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Binatang4Legss,
  Binatang4LegssShema,
} from 'src/model/binatangKaki4.shemas';

@Module({
  controllers: [Animal4legsController],
  providers: [Animal4legsService],
  imports: [
    MongooseModule.forFeature([
      { name: Binatang4Legss.name, schema: Binatang4LegssShema },
    ]),
  ],
})
export class Animal4legModule {}
