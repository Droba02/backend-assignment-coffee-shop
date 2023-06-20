import { Body, Logger, Controller, Post } from "@nestjs/common";
import { OrderService } from "./order.service";


@Controller('order')
export class OrderController{
    constructor(private orderService: OrderService){}

    @Post('/table')
    makeTableOrder(@Body() body){
        const obj = JSON.parse(body)
        let res = this.orderService.makeOrderTable(obj.ids)
        if(res == -1){
            return "no"
        }else if(res == 1){
            return "yes"
        }
    }

    @Post('/togo')
    makeToGoOrder(@Body() body){
        let res = this.orderService.makeOrderToGo(body.ids)
        if(res == -1){
            return "no"
        }else if(res == 1){
            return "yes"
        }
    }
   
}