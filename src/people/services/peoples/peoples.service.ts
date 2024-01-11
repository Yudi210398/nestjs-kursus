import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreatePersonAnimalPatch } from 'src/dto/personAnimalPatch.dto';
import { ErrorCustomeMessage } from 'src/error/errorCustomeMessage';

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
    id: string,
    { nama, umur, binantangKesukaan }: CreatePersonAnimalPatch,
  ): Promise<PersonAnimal[]> {
    const valid = mongoose.Types.ObjectId.isValid(id);
    const data = await this.personAnimal.find({ _id: id }).exec();
    console.log(data, `cak`);

    if (data.length === 0 || !valid)
      throw new ErrorCustomeMessage('data tidak', 401);
    const hasil = data[0];

    hasil.binantangKesukaan = binantangKesukaan;
    hasil.nama = nama;
    hasil.umur = umur;

    await hasil.save();

    return data;
  }

  async hapusDataPerson(id: string): Promise<object> {
    const valid = mongoose.Types.ObjectId.isValid(id);

    const datahalo = await this.personAnimal.findById(id);

    if (!valid || !datahalo)
      throw new ErrorCustomeMessage('data tidak ada atau sudah dihapus', 401);

    await this.personAnimal.deleteOne({ _id: id });
    return { message: 'berhasil hapus' };
  }
}
