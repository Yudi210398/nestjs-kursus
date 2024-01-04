import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(
    @Inject('CUSTOMER-SERVICE')
    private readonly customerService: CustomersService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getAllCustomer() {
    return this.customerService.getAllCustomers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':name')
  getDataByname(@Param('name') name: string) {
    console.log(name);
    return this.customerService.getCustomerByName(name);
  }
}
