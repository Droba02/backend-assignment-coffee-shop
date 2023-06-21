import { Controller, Logger } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { SendResponseEvent } from "./send-response.event";
import { SuccessfulOrderEvent } from "./successful-order.event";


@Controller()
export class BarmenController{

    
    @EventPattern('successful-order')
    successfulOrder(data: SuccessfulOrderEvent){
        Logger.log(`Barista finished the order number ${data.orderNumber}`)
    }
        

}