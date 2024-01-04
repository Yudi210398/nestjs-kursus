import { HttpException, HttpStatus } from '@nestjs/common';
import { Person } from 'src/types/cusmomerType';

export const fungsiReturnError = (data: Person[]) => {
  if (data.length > 0) return data;
  else throw new HttpException('data tidak ada', HttpStatus.BAD_REQUEST);
};
