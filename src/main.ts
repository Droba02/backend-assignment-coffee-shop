import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BarmenModule } from './barmen/barmen.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options:{
      port: 3001
    }
  })
  await app.startAllMicroservices();
  await app.listen(3000);

  
}
bootstrap();
