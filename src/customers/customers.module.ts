import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { ExampleMiddleware } from 'src/middleware/middlewareExample';
import { ExampleMiddlewareAuth } from 'src/middleware/middlewareAuth';

@Module({
  controllers: [CustomersController],
  providers: [{ provide: 'CUSTOMER-SERVICE', useClass: CustomersService }],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ExampleMiddleware, ExampleMiddlewareAuth)
      .exclude({
        path: 'customers/:name',
        method: RequestMethod.GET,
      })
      .forRoutes({ path: 'customers', method: RequestMethod.GET });
  }
}
