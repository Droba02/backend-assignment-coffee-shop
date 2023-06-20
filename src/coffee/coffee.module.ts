import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Coffee } from "./coffee.entity";
import { CoffeeSerivce } from "./coffee.service";

@Module({
    imports: [TypeOrmModule.forFeature([Coffee])],
    providers: [CoffeeSerivce],
    controllers: [],
    exports: [CoffeeSerivce]
  })
export class CoffeeModule{}