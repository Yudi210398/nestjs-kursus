import { Injectable } from '@nestjs/common';
import { Person } from 'src/types/cusmomerType';

@Injectable()
export class UsersService {
  private people: Person[] = [
    { name: 'sasa', id: 1, age: 25 },
    { name: 'imam', id: 2, age: 28 },
  ];

  getPeople(id: number) {
    const data = this.people.filter((data) => data.id === id);
    return data;
  }

  getAlluser() {
    return this.people;
  }

  createUser(customer: Person) {
    this.people.push(customer);
  }
}
