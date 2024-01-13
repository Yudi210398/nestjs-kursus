import {
  IsByteLength,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreatePersonDTOAnima {
  @IsMongoId({ message: 'Bukan ID mongo' })
  @IsNotEmpty({ message: 'Nama Binatang tidak boleh kosong' })
  binantangKesukaan: any;

  @IsNotEmpty({ message: 'Jenis Binatang tidak boleh kosong' })
  @IsString({ message: 'data harus berupa text' })
  nama: string;

  @IsNotEmpty({ message: 'Nama Tidak Boleh kosong' })
  @IsEmail({}, { message: 'Harus Berupa email' })
  email: string;

  @IsByteLength(1, 6, {
    message: 'password harus 1 huruf dan maksimal 6 huruf',
  })
  @IsNotEmpty({ message: 'Nama Tidak Boleh kosong' })
  password: string;

  @IsNotEmpty({ message: 'Jenis Binatang tidak boleh kosong' })
  @IsNumber({}, { message: 'data harus berupa Angka' })
  umur: number;
}
