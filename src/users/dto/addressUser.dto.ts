import { IsNotEmpty } from 'class-validator';

export class CreateAdressUser {
  @IsNotEmpty({ message: 'Jalan tidak boleh kosong' })
  jalan: string;

  @IsNotEmpty({ message: 'Nomor Rumah tidak boleh kosong' })
  no: number;
}
