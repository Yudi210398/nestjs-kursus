import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PersonAnimal } from 'src/model/person.shemas';
import { CreatePersonDTOAnima } from 'src/users/dto/personAnimal.dto';
import * as bcrypt from 'bcrypt';
import { LoginPageAuth } from 'src/dto/login.dto';
import { ErrorCustomeMessage } from 'src/error/errorCustomeMessage';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(PersonAnimal.name) private personAnimal: Model<PersonAnimal>,
    private jwtService: JwtService,
  ) {}

  async registerPerson(dtoData: CreatePersonDTOAnima): Promise<PersonAnimal> {
    const data = await new this.personAnimal({
      binantangKesukaan: dtoData.binantangKesukaan,
      nama: dtoData.nama.toLowerCase(),
      password: await bcrypt.hash(dtoData.password, 10),
      email: dtoData.email.toLowerCase(),
      umur: dtoData.umur,
    });
    return data.save();
  }

  async loginPage(dtoLogin: LoginPageAuth) {
    const cekEmail = await this.personAnimal.findOne({ email: dtoLogin.email });

    if (!cekEmail) throw new ErrorCustomeMessage('data Tidak ditemukan', 401);

    const isMatch = await bcrypt.compare(dtoLogin.password, cekEmail.password);

    if (!isMatch) throw new ErrorCustomeMessage('Password Salah', 401);

    const datass = { id: cekEmail._id, email: cekEmail.email };

    return {
      token: await this.jwtService.sign(datass),
      pesan: 'Berhasil bikin token',
    };
  }
}
