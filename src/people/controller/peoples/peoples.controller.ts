import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PeoplesService } from 'src/people/services/peoples/peoples.service';
import { CreatePersonDTOAnima } from 'src/users/dto/personAnimal.dto';

@Controller('peoples')
export class PeoplesController {
  constructor(private readonly personAnimalService: PeoplesService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  createPersonAnimal(@Body() person: CreatePersonDTOAnima) {
    return this.personAnimalService.createPersonAnimal(person);
  }

  @Get()
  getDataAll() {
    return this.personAnimalService.getDataAll();
  }
}
