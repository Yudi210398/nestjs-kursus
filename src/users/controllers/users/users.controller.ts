import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { fungsiReturnError } from 'src/function/fungsiUmum';
import { CreateUserDto } from 'src/users/dto/userPost.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getUsersAll() {
    return fungsiReturnError(this.userService.getAlluser());
  }

  @Get('getData')
  getdataId() {
    return fungsiReturnError(this.userService.getPeople(2));
  }

  @Get(':hana')
  getUsersId(@Param('hana') hana: string) {
    return [{ username: `Hana ${hana}` }];
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @Post('ser')
  createUserBody(@Body() data: string) {
    return data;
  }
}
