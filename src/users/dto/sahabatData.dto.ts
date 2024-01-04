import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

enum Gender {
  Pria = 'Pria',
  Perempuan = 'Perempuan',
}

export class SahabatDto {
  @IsNotEmpty({ message: 'harus diisi' })
  @IsString({ message: 'harus isi string' })
  nama: string;

  @IsNotEmpty({ message: 'harus diisi' })
  @IsNumber({}, { message: 'harus berupa angka' })
  umur: number;

  @IsNotEmpty({ message: 'harus diisi' })
  gender: Gender;
}
