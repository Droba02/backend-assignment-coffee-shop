import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Coffee } from "./coffee.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Coffee])],
    providers: [],
    controllers: [],
  })
export class CoffeeModule{
    constructor(public id: number,public name:string, public amount:number, public time: number ){}

    
}