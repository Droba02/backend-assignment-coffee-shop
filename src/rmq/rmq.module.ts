import { DynamicModule, Module } from "@nestjs/common";
import { RmqService } from "./rmq.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

@Module({
    imports: [
        ClientsModule.register([
          {
            name: 'ORDERS',
            transport: Transport.RMQ,
            options: {
              urls: ['amqp://localhost:5672'],
              queue: 'orders_queue',
            },
          },
        ]),
      ],
    providers: [RmqService],
    exports: [RmqService]
})
export class RmqModule {}