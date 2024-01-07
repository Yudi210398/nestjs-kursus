import { HttpException, HttpStatus } from '@nestjs/common';

export class ErrorCustomeMessage extends HttpException {
  constructor(msg?: string, status?: HttpStatus) {
    super(msg || 'Data Tidak ditemukan', status || HttpStatus.NOT_FOUND);
  }
}
