import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDTOAnima4Legs {
  @IsNotEmpty({ message: 'Nama Binatang tidak boleh kosong' })
  namaBinatangs: string;

  @IsNotEmpty({ message: 'Jenis Binatang tidak boleh kosong' })
  @IsString({ message: 'data harus berupa text' })
  jenisBinatang: string;
}
