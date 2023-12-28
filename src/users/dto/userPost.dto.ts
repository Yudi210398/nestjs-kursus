import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { CreateAdressUser } from './addressUser.dto';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  id: number;

  @IsNotEmpty()
  age: number;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateUserDto)
  alamat: CreateAdressUser;
}
