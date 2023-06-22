import { Module } from "@nestjs/common";
import { BarmenService } from "./barmen.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { BarmenController } from "./barmen.controller";

@Module({
    imports:[ClientsModule.register([
        {name : 'BARISTA1',
        transport: Transport.TCP,
    options:{
        port:3002
    }}
      ]),
      ClientsModule.register([
        {name : 'BARISTA2',
        transport: Transport.TCP,
    options:{
        port:3003
    }}
      ]),
      ClientsModule.register([
        {name : 'BARISTA3',
        transport: Transport.TCP,
    options:{
        port:3004
    }}
      ])],
   providers:[BarmenService],
    exports:[BarmenService],
    controllers: [BarmenController]
})
export class BarmenModule{}
