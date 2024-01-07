import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Animal4legsService } from 'src/animal4leg/services/animal4legs/animal4legs.service';
import { CreateDTOAnima4Legs } from 'src/users/dto/binatang4kaki.dto';

@Controller('animal4legs')
export class Animal4legsController {
  constructor(private readonly animal4legsServices: Animal4legsService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  createAnimal4legs(@Body() animal: CreateDTOAnima4Legs) {
    return this.animal4legsServices.createAnimal4Legs(animal);
  }
}
