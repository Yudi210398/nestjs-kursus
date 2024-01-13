import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { MongooseModule } from '@nestjs/mongoose';

import { Animal4legModule } from './animal4leg/animal4leg.module';
import { PeopleModule } from './people/people.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      `mongodb://${process.env.USERNAMEDATA}:${process.env.PASSWORD_DATABASE}@cluster0-shard-00-00.oaqmd.mongodb.net:27017,cluster0-shard-00-01.oaqmd.mongodb.net:27017,cluster0-shard-00-02.oaqmd.mongodb.net:27017/nestLearnMongo?ssl=true&replicaSet=atlas-myi90d-shard-0&authSource=admin&retryWrites=true&w=majority`,
    ),
    UsersModule,
    CustomersModule,
    Animal4legModule,
    PeopleModule,
    AuthModule,
  ],
})
export class AppModule {}
