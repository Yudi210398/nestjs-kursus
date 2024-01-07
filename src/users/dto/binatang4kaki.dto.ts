import { IsNotEmpty } from 'class-validator';

export class CreateDTOAnima4Legs {
  @IsNotEmpty({ message: 'Nama Binatang tidak boleh kosong' })
  namaBinatang: string;

  @IsNotEmpty({ message: 'Jenis Binatang tidak boleh kosong' })
  jenisBinatang: number;
}
