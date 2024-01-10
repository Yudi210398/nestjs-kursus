import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePersonAnimalPatch } from 'src/dto/personAnimalPatch.dto';

import { PersonAnimal } from 'src/model/person.shemas';
import { CreatePersonDTOAnima } from 'src/users/dto/personAnimal.dto';

@Injectable()
export class PeoplesService {
  constructor(
    @InjectModel(PersonAnimal.name) private personAnimal: Model<PersonAnimal>,
  ) {}

  async createPersonAnimal(
    dtoData: CreatePersonDTOAnima,
  ): Promise<PersonAnimal> {
    const data = await new this.personAnimal({
      binantangKesukaan: dtoData.binantangKesukaan,
      nama: dtoData.nama.toLowerCase(),
      umur: dtoData.umur,
    });
    return data.save();
  }

  async getDataAll(): Promise<PersonAnimal[]> {
    return await this.personAnimal.find().populate('binantangKesukaan');
  }

  async patchDataPerson(
    ids: string,
    { nama, umur, binantangKesukaan }: CreatePersonAnimalPatch,
  ): Promise<PersonAnimal[]> {
    const data = await this.personAnimal.find({ _id: ids }).exec();

    const hasil = data[0];

    hasil.binantangKesukaan = binantangKesukaan;
    hasil.nama = nama;
    hasil.umur = umur;

    await hasil.save();

    return data;
  }
}
