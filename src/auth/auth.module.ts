import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonAnimal, PersonAnimal4LegssShema } from 'src/model/person.shemas';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'data123',
      signOptions: { expiresIn: '60s' },
    }),
    MongooseModule.forFeature([
      { name: PersonAnimal.name, schema: PersonAnimal4LegssShema },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
