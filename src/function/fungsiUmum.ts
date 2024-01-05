import { HttpException, HttpStatus } from '@nestjs/common';
import { ExcludePass, Person } from 'src/types/cusmomerType';

export const fungsiReturnError = (data: Person[]) => {
  if (data.length > 0) return data;
  else throw new HttpException('data tidak ada', HttpStatus.BAD_REQUEST);
};

// export const fungsiDataAdaAtauTidakAda = (data: [], indeks: number) => {
//   if (data.length > 0) return new ExcludePass(data[indeks]);
//   return new HttpException('data tidak ada', HttpStatus.BAD_REQUEST);
// };

export function fungsiDataAdaAtauTidakAda<T>(data: T[]): object {
  if (data.length > 0) return new ExcludePass(data[0]);
  return new HttpException('data tidak ada', HttpStatus.BAD_REQUEST);
}
