import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePersonAnimalPatch {
  @IsNotEmpty({ message: 'Nama Tidak Boleh kosong' })
  binantangKesukaan: any;

  @IsNotEmpty({ message: 'Nama Tidak Boleh kosong' })
  nama: string;

  @IsNotEmpty({ message: 'umur tidak boleh kosong' })
  @IsNumber({}, { message: 'data harus berupa Angka' })
  umur: number;
}
