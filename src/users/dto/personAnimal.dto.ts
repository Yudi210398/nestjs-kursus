import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePersonDTOAnima {
  @IsNotEmpty({ message: 'Nama Binatang tidak boleh kosong' })
  binantangKesukaan: any;

  @IsNotEmpty({ message: 'Jenis Binatang tidak boleh kosong' })
  @IsString({ message: 'data harus berupa text' })
  nama: string;

  @IsNotEmpty({ message: 'Jenis Binatang tidak boleh kosong' })
  @IsNumber({}, { message: 'data harus berupa Angka' })
  umur: number;
}
