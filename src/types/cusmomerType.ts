import { Exclude } from 'class-transformer';

export interface Person {
  id: number;
  name: string;
  age: number;
}

export interface CustomerDataLogin {
  name: string;
  password: string | number;
}

export class ExcludePass {
  name: string;
  hobby?: string;

  @Exclude()
  password: string | number;

  constructor(partial: Partial<ExcludePass>) {
    Object.assign(this, partial);
  }
}
