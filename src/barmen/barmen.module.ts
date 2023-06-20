import { Module } from "@nestjs/common";
import { BarmenService } from "./barmen.service";

@Module({
   providers:[BarmenService],
    exports:[BarmenService]
})
export class BarmenModule{

    constructor( public baristas: Barista[]=[], public orders = [], public minInterval:number = 0){}


    addBarista(barista: Barista){
        this.baristas.push(barista);
    }
}
