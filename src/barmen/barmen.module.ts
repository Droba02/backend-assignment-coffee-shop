import { Module } from "@nestjs/common";
import { BarmenService } from "./barmen.service";

@Module({
   providers:[BarmenService],
    exports:[BarmenService]
})
export class BarmenModule{}
