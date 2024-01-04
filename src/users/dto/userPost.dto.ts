import {
  IsArray,
  IsInt,
  IsNotEmpty,
  Max,
  ValidateNested,
} from 'class-validator';
import { CreateAdressUser } from './addressUser.dto';
import { Type } from 'class-transformer';
import { SahabatDto } from './sahabatData.dto';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsInt({ message: 'data Berupa Angka' })
  @Max(10, { message: 'Angka harus dibawah 10' })
  id: number;

  @IsNotEmpty({ message: 'Tidak ditemukan' })
  age: number;

  @ValidateNested()
  @Type(() => CreateAdressUser)
  alamat: CreateAdressUser;

  @IsArray({ message: 'Array tidak boleh kosong' })
  @ValidateNested({ each: true })
  @Type(() => SahabatDto)
  sahabat: SahabatDto[];
}
