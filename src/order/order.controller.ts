import { Body, Logger, Controller, Post } from "@nestjs/common";
import { OrderService } from "./order.service";


@Controller('order')
export class OrderController{
    constructor(private orderService: OrderService){}

    @Post('/table')
    makeTableOrder(@Body() body){
        Logger.log(body.ids)
        this.orderService.makeOrderTable(body.ids)
        return "Order sent!"
        
    }

    @Post('/togo')
    makeToGoOrder(@Body() body){
        let res = this.orderService.makeOrderToGo(body.ids)
        return "Order sent!"
        }
    }
   
