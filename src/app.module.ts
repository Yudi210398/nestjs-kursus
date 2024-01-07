import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { MongooseModule } from '@nestjs/mongoose';

import { Animal4legModule } from './animal4leg/animal4leg.module';

@Module({
  imports: [
    UsersModule,
    CustomersModule,
    MongooseModule.forRoot(
      'mongodb+srv://runatyudi:kawasanrokok1998@cluster0.oaqmd.mongodb.net/nestLearnMongo?retryWrites=true&w=majority',
    ),
    Animal4legModule,
  ],
})
export class AppModule {}
