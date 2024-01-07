import { Injectable } from '@nestjs/common';
import { ErrorCustomeMessage } from 'src/error/errorCustomeMessage';
import { fungsiDataAdaAtauTidakAda } from 'src/function/fungsiUmum';
import { ExcludePass } from 'src/types/cusmomerType';

@Injectable()
export class CustomersService {
  private customers: ExcludePass[] = [
    { id: 1, name: 'Hana', password: 123456 },
    { id: 2, name: 'Rico', password: 'KaryaGuna', hobby: 'Futsal' },
    { id: 3, name: 'Sasa', password: 'KaryaGuna' },
  ];

  getAllCustomers() {
    return this.customers.map((data) => new ExcludePass(data));
  }

  getCustomerByName(name: string) {
    const data = this.customers.filter(
      (data) => data.name.toLowerCase() === name.toLowerCase(),
    );

    return fungsiDataAdaAtauTidakAda(data);
  }

  getCustomerById(id: number) {
    const data = this.customers.filter((data) => data.id === id);

    if (data.length > 0) return new ExcludePass(data[0]);
    return new ErrorCustomeMessage('Data ID tidak ditemukan', 401);
  }
}
