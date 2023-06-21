import { Module } from "@nestjs/common";
import { BarmenService } from "./barmen.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { BarmenController } from "./barmen.controller";

@Module({
    imports:[ClientsModule.register([
        {name : 'BARISTA',
        transport: Transport.TCP}
      ])],
   providers:[BarmenService],
    exports:[BarmenService],
    controllers: [BarmenController]
})
export class BarmenModule{}
