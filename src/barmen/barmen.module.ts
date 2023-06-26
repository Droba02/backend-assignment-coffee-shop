import { Module } from "@nestjs/common";
import { BarmenService } from "./barmen.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { BarmenController } from "./barmen.controller";
import { RmqModule } from "src/rmq/rmq.module";

@Module({
    imports:[RmqModule],
   providers:[BarmenService],
    exports:[BarmenService],
    controllers: [BarmenController]
})
export class BarmenModule{}
