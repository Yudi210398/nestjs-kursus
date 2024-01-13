import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { LoginPageAuth } from 'src/dto/login.dto';
import { CreatePersonDTOAnima } from 'src/users/dto/personAnimal.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(`create`)
  @UsePipes(ValidationPipe)
  createRegisterPerson(@Body() person: CreatePersonDTOAnima) {
    return this.authService.registerPerson(person);
  }

  @Post('login')
  @UsePipes(ValidationPipe)
  loginPerson(@Body() person: LoginPageAuth) {
    return this.authService.loginPage(person);
  }
}
