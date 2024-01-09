import { Module } from '@nestjs/common';
import { PeoplesController } from './controller/peoples/peoples.controller';
import { PeoplesService } from './services/peoples/peoples.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonAnimal, PersonAnimal4LegssShema } from 'src/model/person.shemas';

@Module({
  controllers: [PeoplesController],
  providers: [PeoplesService],
  imports: [
    MongooseModule.forFeature([
      { name: PersonAnimal.name, schema: PersonAnimal4LegssShema },
    ]),
  ],
})
export class PeopleModule {}
