import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ErrorCustomeMessage } from 'src/error/errorCustomeMessage';
import { Animals4Legss } from 'src/model/AnimalData';

import { CreateDTOAnima4Legs } from 'src/users/dto/binatang4kaki.dto';

@Injectable()
export class Animal4legsService {
  constructor(
    @InjectModel(Animals4Legss.name)
    private binatang4Legs: Model<Animals4Legss>,
  ) {}

  async createAnimal4Legs(
    dataDto: CreateDTOAnima4Legs,
  ): Promise<Animals4Legss> {
    const hasil = await this.binatang4Legs.findOne({
      jenisBinatang: dataDto.jenisBinatang.toLowerCase().replace(/\s/g, ''),
    });

    if (hasil)
      throw await new ErrorCustomeMessage(
        'Data Sudah Terpakai',
        HttpStatus.BAD_REQUEST,
      );
    // const data = await new this.binatang4Legs(dataDto); //! Simple code

    const data = await new this.binatang4Legs({
      namaBinatangs: dataDto.namaBinatangs.toLowerCase().replace(/\s/g, ''),
      jenisBinatang: dataDto.jenisBinatang.toLowerCase().replace(/\s/g, ''),
    });
    return await data.save();
  }
}
