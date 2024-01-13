import { IsByteLength, IsEmail, IsNotEmpty } from 'class-validator';

export class LoginPageAuth {
  @IsNotEmpty({ message: 'Nama Tidak Boleh kosong' })
  @IsEmail({}, { message: 'Harus Berupa email' })
  email: string;

  @IsByteLength(1, 6, {
    message: 'password harus 1 huruf dan maksimal 6 huruf',
  })
  @IsNotEmpty({ message: 'Nama Tidak Boleh kosong' })
  password: string;
}
