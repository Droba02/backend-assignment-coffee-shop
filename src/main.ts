import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BarmenModule } from './barmen/barmen.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.listen(3000);
  
}
bootstrap();
