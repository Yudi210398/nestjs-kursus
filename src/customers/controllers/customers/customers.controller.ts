import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
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
  @Get('name/:name')
  getDataByname(@Param('name') name: string) {
    console.log(name);
    return this.customerService.getCustomerByName(name);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('id/:id')
  getDataById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return this.customerService.getCustomerById(id);
  }
}
