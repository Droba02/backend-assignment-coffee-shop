import { Body, Controller, Post } from "@nestjs/common";
import { OrderService } from "./order.service";


@Controller('order')
export class OrderController{
    constructor(private orderService: OrderService){}

    @Post('table')
    makeTableOrder(@Body() body){
        const obj = JSON.parse(body)
        this.orderService.makeOrderTable(obj)
    }

    @Post('toGo')
    makeToGoOrder(@Body() body){
        const obj = JSON.parse(body)
        this.orderService.makeOrderToGo(obj)
    }
   
}