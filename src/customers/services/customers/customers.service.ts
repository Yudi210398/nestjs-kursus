import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ExcludePass } from 'src/types/cusmomerType';

@Injectable()
export class CustomersService {
  private customers: ExcludePass[] = [
    { name: 'Hana', password: 123456 },
    { name: 'Rico', password: 'KaryaGuna', hobby: 'Futsal' },
    { name: 'Sasa', password: 'KaryaGuna' },
  ];

  getAllCustomers() {
    return this.customers.map((data) => new ExcludePass(data));
  }

  getCustomerByName(name: string) {
    const data = this.customers.filter(
      (data) => data.name.toLowerCase() === name.toLowerCase(),
    );
    console.log(data);
    if (data.length > 0) return new ExcludePass(data[0]);

    return new HttpException('data tidak ada', HttpStatus.BAD_REQUEST);
  }
}
