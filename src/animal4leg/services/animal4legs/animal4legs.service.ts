import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Binatang4Legss } from 'src/model/binatangKaki4.shemas';
import { CreateDTOAnima4Legs } from 'src/users/dto/binatang4kaki.dto';

@Injectable()
export class Animal4legsService {
  constructor(
    @InjectModel(Binatang4Legss.name)
    private binatang4Legs: Model<Binatang4Legss>,
  ) {}

  async createAnimal4Legs(
    dataDto: CreateDTOAnima4Legs,
  ): Promise<Binatang4Legss> {
    const data = await new this.binatang4Legs(dataDto);
    return await data.save();
  }
}
