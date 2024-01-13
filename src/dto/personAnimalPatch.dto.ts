import {
  IsByteLength,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class CreatePersonAnimalPatch {
  @IsMongoId({ message: 'id tidal valid' })
  @IsNotEmpty({ message: 'Nama Tidak Boleh kosong' })
  binantangKesukaan: any;

  @IsNotEmpty({ message: 'Nama Tidak Boleh kosong' })
  nama: string;

  @IsNotEmpty({ message: 'Nama Tidak Boleh kosong' })
  @IsEmail({}, { message: 'Harus Berupa email' })
  email: string;

  @IsByteLength(1, 6, {
    message: 'password harus 1 huruf dan maksimal 6 huruf',
  })
  @IsNotEmpty({ message: 'Nama Tidak Boleh kosong' })
  password: string;

  @IsNotEmpty({ message: 'umur tidak boleh kosong' })
  @IsNumber({}, { message: 'data harus berupa Angka' })
  umur: number;
}
