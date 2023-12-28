import { IsNotEmpty } from 'class-validator';

export class CreateAdressUser {
  @IsNotEmpty()
  jalan: string;

  @IsNotEmpty()
  noRumah: number;

  kota?: string;
}
