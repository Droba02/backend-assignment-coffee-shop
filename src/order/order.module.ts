import { Module } from "@nestjs/common";
import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";
import { CoffeeModule } from "src/coffee/coffee.module";
import { BarmenModule } from "src/barmen/barmen.module";
import { CoffeeSerivce } from "src/coffee/coffee.service";
import { BarmenService } from "src/barmen/barmen.service";

@Module({
    imports: [CoffeeModule, BarmenModule],
    controllers: [OrderController],
    providers: [OrderService, CoffeeSerivce, BarmenService]
})
export class OrderModule{}