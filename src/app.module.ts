import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './coffee/coffee.entity';
import { CoffeeModule } from './coffee/coffee.module';
import { BarmenModule } from './barmen/barmen.module';
import { OrderModule } from './order/order.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'coffee_shop',
      entities: [Coffee],
      synchronize: true
}),CoffeeModule,BarmenModule,OrderModule, ClientsModule.register([
  {name : 'BARISTA',
  transport: Transport.TCP}
]), EventEmitterModule.forRoot(), ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: 'backend-assgnment-coffee-shop\.env'
})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
